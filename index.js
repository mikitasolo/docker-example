const Koa = require('koa');
const Router = require('koa-router');

const router = new Router();

router.get('/me', (ctx) => {
  ctx.body = '/me';
})

router.post('/logs', (ctx) => {
  ctx.body = 'POST /logs';
})

router.get('/logs', (ctx) => {
  ctx.body = 'GET /logs';
})

const app = new Koa();
app.use(router.routes());

app.listen(3002)
