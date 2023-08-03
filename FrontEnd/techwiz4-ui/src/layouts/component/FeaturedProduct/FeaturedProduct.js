import Item from '~/component/Items/index.js';
import { Button, Text, Grid } from '@chakra-ui/react';

import Sidebar from './Sidebar';

function FeaturedProduct() {
    return (
        <div id="FeaturedProduct">
            <Text fontSize={'4xl'} fontWeight={'600'} padding={'6rem'} align={'center'}>
                FEATURED PRODUCTS
            </Text>
            <Grid
                maxWidth={'1440px'}
                mx={'auto'}
                templateColumns={{ lg: 'repeat(3, 1fr)', md: 'repeat(2, 1fr)' }}
                gap={6}
            >
                {/*{products.map((product) => {*/}
                {/*    return <Item {...product} productName={product.name} key={product.id} />;*/}
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                {/*})}*/}
            </Grid>
            <div className="text-center ">
                <Button
                    colorScheme="yellow"
                    variant="outline"
                    borderRadius="24px"
                    fontSize={'2rem'}
                    height={'5rem'}
                    width={'15rem'}
                    _hover={{ color: 'yellow.700' }}
                >
                    Show All
                </Button>
                <Sidebar />
            </div>
        </div>
    );
}

export default FeaturedProduct;
