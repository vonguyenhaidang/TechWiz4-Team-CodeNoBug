import { Text,Img,Flex } from "@chakra-ui/react";
function ProductItem({data}) {
    console.log(data.name);
    return (
        <Flex alignItems={'center'} justifyContent={'start'} __hover={{ bg: 'red' }}>
            <box>
                <Img
                    src="https://file.hstatic.net/1000284478/file/ht_nu_3_68c6cd1c78434d4088c511eca1613eba.jpg"
                    boxSize={'48px'}
                    objectFit="cover"
                    borderRadius={'8px'}
                    alt=""
                />
            </box>
            <box>
                <Text marginLeft={'12px'} fontSize={'1.6rem'} fontWeight={'600'}>
                    {data.name}
                  
                </Text>
            </box>
        </Flex>
    );
}

export default ProductItem;