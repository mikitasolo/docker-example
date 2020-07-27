const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const userService = require('./resources/user/user.service');
const logService = require('./resources/log/log.service');

const router = new Router();

router.get('/me', async (ctx) => {
  ctx.body = await userService.findOne({});
})

router.post('/logs', async (ctx) => {
  if (!ctx.request.body.event) {
    ctx.status = 400;
    ctx.body = "'event' is required";
    return;
  }

  ctx.body = await logService.create(ctx.request.body);
})

router.get('/logs', async (ctx) => {
  ctx.body = (await logService.find({})).results;
})

const app = new Koa();

app.use(bodyParser());
app.use(router.routes());

app.listen(3002)
