import DavidLuke from '../../image/David-Luke.png';
import Context from '../store/Context';
import ShopContext from '../GlobalStates/ShopContext';
import React, { useContext } from 'react';
import { Text } from '@chakra-ui/react';
import { Card, CardBody, CardFooter, Image, Stack, Heading, Divider, Button, ButtonGroup } from '@chakra-ui/react'
function Item({ price, productName, post }) {
    const storeContext = useContext(Context)
    const[state,dispatch] = storeContext
    return (  
        <ShopContext.Consumer>        
            {(context) => (
                <Card maxW='md'>
                <CardBody>
                  <Image
                    src={DavidLuke}
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                  />
                  <Stack mt='6' spacing='3'>
                    <Heading size='md'>{productName}</Heading>
                    <Text color='blue.600' fontSize='2xl'>
                      ${price}
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue'>
                      Buy now
                    </Button>
                    <Button variant='ghost' colorScheme='blue' onClick={context.addProductToCart.bind(this, {post})}>
                      Add to cart
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>  
            )}
            
        </ShopContext.Consumer>
    );
}

export default Item;
