import config from '../config';
import Home from '../page/Home/Home';
import Category from '../page/Category/Category';
import ProductionInfor from '../page/ProductionInfor/ProductionInfor';
import Cart from '../page/Cart/Cart';

// import { HeaderOnly } from '~/layouts';

//Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.category, component: Category },
    { path: config.routes.productionInfor, component: ProductionInfor },
    { path: config.routes.cart, component: Cart },

    // { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    // { path: config.routes.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
