import routerProducts from './products';
import routerSite from './site';
import routerUsers from './users';

function routes(app) {
  app.use('/users', routerUsers);
  app.use('/products', routerProducts);
  app.use('/', routerSite);
}

export default routes;
