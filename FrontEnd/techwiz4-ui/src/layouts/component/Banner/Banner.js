import { Flex, Box, Button } from '@chakra-ui/react';
function Banner() {
    return (
        <Box bg="gray.400">
            <Flex
                direction={'column'}
                justify={'center'}
                align={'center'}
                fontSize={{base: '3xl',md:'4xl'}}
                fontWeight={'600'}
                color={'whiteAlpha.800'}
                lineHeight={'4rem'}
                padding={'8rem'}
        
            
            >
                <Box>New Outerwear Colection</Box>
                <Box>Colection</Box>
                <Box>Colection 2</Box>
                <Box>
                    <Button colorScheme="white" variant="outline" borderRadius={"24px"} fontSize={{base:'1.5rem',md:'2rem'}} height={{base:'4rem',md:'5rem'}} width={{base:'12rem',md:'15rem'}} _hover={{color:'yellow.500'}} _active={{color: 'yellow.700'}} marginY={'3rem'}>Shop Now</Button>
                </Box>
            </Flex>
        </Box>
    );
}

export default Banner;
