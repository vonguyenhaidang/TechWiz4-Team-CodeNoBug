import Home from '../page/Home';
import Category from '../page/Category';
import ProductionInfor from '../page/ProductionInfor';
import Cart from '../page/Cart';

// import { HeaderOnly } from '~/layouts';

//Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/category', component: Category },
    { path: '/productionInfor', component: ProductionInfor },
    { path: '/cart', component: Cart }


    // { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    // { path: config.routes.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
