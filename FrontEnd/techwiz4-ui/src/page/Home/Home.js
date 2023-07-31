import Banner from '../../layouts/component/Banner/Banner';
import NewProduct from '../../layouts/component/NewProduct';
import Story from '../../layouts/component/Story/Story';
import FeaturedProduct from '../../layouts/component/FeaturedProduct';

function Home() {
    return (
        <div>
            <Banner />
            <NewProduct />
            <Story />
            <FeaturedProduct />
            
        </div>
    );
}

export default Home;
