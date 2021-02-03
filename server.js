require('isomorphic-fetch');
const dotenv = require('dotenv');
const Koa = require('koa');
const next = require('next');
const { default: createShopifyAuth } = require('@shopify/koa-shopify-auth');
const { verifyRequest } = require('@shopify/koa-shopify-auth');
const koaBody = require('koa-body');
const session = require('koa-session');

dotenv.config();

const {default: graphQLProxy } = require('@shopify/koa-shopify-graphql-proxy');
const Router = require('koa-router');
const {receiveWebhook, registerWebhook } = require('@shopify/koa-shopify-webhooks');
const { ApiVersion } = require('@shopify/koa-shopify-graphql-proxy');
const { OptionList } = require('@shopify/polaris');


const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev })
const handle = app.getRequestHandler();

const { SHOPIFY_API_SECRET, SHOPIFY_API_KEY, HOST, NOTIFYWEBHOOK} = process.env;

app.prepare().then(() => {
    const server = new Koa();
    const router = new Router();
    server.use(session({ secure: true, sameSite: 'none' }, server));
    server.keys = [SHOPIFY_API_SECRET];
    server.use(
        createShopifyAuth({
          apiKey: SHOPIFY_API_KEY,
          secret: SHOPIFY_API_SECRET,
          scopes: ['read_products', 'write_products'],
          async afterAuth(ctx) {
            const { shop, accessToken } = ctx.session;
            ctx.cookies.set("shopOrigin", shop, {
              httpOnly: false,
              secure: true,
              sameSite: 'none'
            });
            await registerWebhook({
              address: `${HOST}/webhooks/products/create`,
              topic: 'PRODUCTS_CREATE',
              accessToken,
              shop,
              apiVersion: ApiVersion.October20
            }),
            await registerWebhook({
              address: `${HOST}/webhooks/products/delete`,
              topic:'PRODUCTS_DELETE',
              accessToken,
              shop,
              apiVersion: ApiVersion.October20
            })
            ctx.redirect(`${HOST}?shop=${shop}`)
          }
        })
      );
    const webhook = receiveWebhook({secret: SHOPIFY_API_SECRET});
    const notificationWebhook = receiveWebhook({secret: NOTIFYWEBHOOK})
    router.post('/webhooks/products/create', webhook, (ctx) => {
        console.log('recieved webhook: ', ctx.state.webhook);
    });
    router.post('/webhooks/products/delete', webhook, (ctx) => {
      console.log('recieved webhook:', ctx.state.webhook);
    });
    router.post('/webhooks/products/update', notificationWebhook, (ctx) => {
          console.log('WE GOT IT BABY!', ctx.state.webhook.payload);
    });
    router.post('/webhooks/theme/update', notificationWebhook, (ctx) => {
        console.log('Recieved webhook:', ctx.state.webhook);
    });
    server.use(graphQLProxy({version: ApiVersion.October20}));

    router.get('(.*)', verifyRequest(), async (ctx) => {
        await handle(ctx.req, ctx.res);
        ctx.respond = false;
        ctx.res.statusCode = 200;
    });

    server.use(router.allowedMethods());
    server.use(router.routes());

    server.listen(port, () => {
        console.log(`> Ready on http://localhost:${port}`);
    });
})
.catch((error)=> {
    console.log(error);
})