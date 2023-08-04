import { useState, useEffect } from 'react';
import { Button, Grid, Text } from '@chakra-ui/react';

import Item from '~/component/Items';

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
        <div>
            <div mx={{ lg: '10rem' }}>
                <Text fontSize={'4xl'} fontWeight={'600'} padding={'6rem'} align={'center'}>
                    NEWEST PRODUCTS
                </Text>
                {loading ? (
                    <span>Loading</span>
                ) : products.length > 0 ? (
                    <Grid maxW={'1440px'} templateColumns={{ lg: 'repeat(3, 1fr)', md: 'repeat(2, 1fr)' }} gap={32}>
                        {products.map((product) => {
                            return <Item {...product} productName={product.name} key={product.id} />;
                        })}
                    </Grid>
                ) : (
                    <span>Khong co san pham</span>
                )}

                <div className="text-center" >
                    <Button isLoading={loading} colorScheme={'red'} variant={'outline'} loadingText={'Dang Tai'} margin={'3rem'}>
                        Show All
                    </Button>
                    <Button
                        onClick={callAPI}
                        colorScheme={'green'} variant={'outline'}
                        margin={'3rem'}
                    >
                        Refresh
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default NewProduct;
