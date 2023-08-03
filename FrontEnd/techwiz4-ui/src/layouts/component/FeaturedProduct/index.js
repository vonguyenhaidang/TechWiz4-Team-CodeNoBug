import Item from '../../../component/Items';
import {Button,Text, Grid} from "@chakra-ui/react";
import Sidebar from './Sidebar';
import React, { useContext } from 'react';
import Context from '../../../component/store/Context';
import ShopContext from '../../../component/GlobalStates/ShopContext';
function FeaturedProduct() {
    const shopContext = useContext(Context)
  const[state,dispatch] = shopContext
    return (
        <ShopContext.Consumer>
            {(context) => (
              <div id="FeaturedProduct">
                <React.Fragment>
                    <Text fontSize={'4xl'} fontWeight={'600'} padding={'6rem'} align={'center'}>FEATURED PRODUCTS</Text>
                    <Grid maxWidth={'1440px'} mx={'auto'} templateColumns={{ lg: 'repeat(3, 1fr)', md: 'repeat(2, 1fr)'}} gap={6}>
                        {state.products.map((product) => {
                        return <Item productName={product.name} key={product.id} post={product}/>   
                        })}
                    </Grid>
                    <div className="text-center ">
                        <Button colorScheme='yellow' variant='outline' borderRadius="24px" fontSize={'2rem'} height={'5rem'} width={'15rem'}  _hover={{color: 'yellow.700'}}>
                            Show All
                        </Button>
                        <Sidebar />
                    </div>
                </React.Fragment>
            </div>  
            )}
            
        </ShopContext.Consumer>
    );
}

export default FeaturedProduct;

