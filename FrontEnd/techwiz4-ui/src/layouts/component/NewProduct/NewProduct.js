import { useState, useEffect } from 'react';
import Item from '../../../component/Items';
import {Button, Grid, Text} from "@chakra-ui/react";

const data = [1, 2, 3].map((item) => ({
    id: item,
    name: `San pham ${item}`,
    price: 1000 * item,
}));
function NewProduct() {
    const [loading, setLoading] = useState(false);

    const [products, setProducts] = useState([]);
    
    const callAPI = () => {
        setLoading(true);
        // goi API
        setTimeout(() => {
            setProducts(data);
            setLoading(false);
        }, [2000]);
    };

    useEffect(() => {
        callAPI();
    }, []);

    useEffect(() => {
        console.log('Load');
    }, [products]);

    return (
        <div >
            <div marginX={{lg:'10rem'}}>
                <Text fontSize={'4xl'} fontWeight={'600'} padding={'6rem'} align={'center'}>NEWEST PRODUCTS</Text>
                {loading ? (
                    <span>Loading</span>
                ) : products.length > 0 ? (
                    <Grid maxW={'1440px'}  templateColumns={{ lg: 'repeat(3, 1fr)', md: 'repeat(2, 1fr)'}} gap={32}>
                        {products.map((product) => {
                            return <Item {...product} productName={product.name} key={product.id} />;
                        })}
                    </Grid>
                ) : (
                    <span>Khong co san pham</span>
                )}

                <div className="text-center ">
                    <Button isLoading={loading} colorScheme={'red'} variant={'outline'} loadingText={'Dang Tai'}>
                        Show All
                    </Button>
                    <button
                        onClick={callAPI}
                        className="h-12 w-40 border border-solid border-black rounded-3xl font-bold text-2xl mt-32 mt-6  text-black"
                    >
                        Refresh
                    </button>
                </div>
            </div>
        </div>
    );
}

export default NewProduct;
