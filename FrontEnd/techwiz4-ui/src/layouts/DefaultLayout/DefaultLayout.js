import Header from '../component/Header';
import Banner from '../component/Banner';
import NewProduct from '../component/NewProduct/NewProduct';
import Story from '../component/Story/Story';
import FeaturedProduct from '../component/FeaturedProduct/FeaturedProduct';
import Sidebar from '../component/Footer/Footer';

function DefaultLayout({ children }) {
    return (
        <div className="max-w-custom-max-width px-24 text-base mx-auto bg-slate-200">
            <Header />
            <Banner />
            <NewProduct />
            <Story />
            <FeaturedProduct />
            <Sidebar />
        </div>
    );
}

export default DefaultLayout;
