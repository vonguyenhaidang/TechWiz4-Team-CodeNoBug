import { HStack, Button, GridItem, Grid, Flex } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Text, Input } from '@chakra-ui/react';
function Footer() {
    return (
        <footer className="w-full bg-white py-8 flex justify-center">
            <div className="max-w-custom-max-width flex justify-center w-full">
                <Grid templateColumns={{ md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} gap={[4, 4, 6]} paddingY={'4rem'}>
                    <GridItem>
                        <ul className="w-full  font-semibold">
                            <Flex
                                direction={'column'}
                                justify={'center'}
                                alignItems={{ base: 'center', md: 'center', lg: 'flex-start' }}
                                fontSize={{ base: '16px', sm: '16px', md: '18px', lg: '2xl', xl: '2xl' }}
                                gap={6}
                            >
                                <Text cursor="pointer">Home</Text>
                                <Text cursor="pointer">Category</Text>
                                <Text cursor="pointer">About</Text>
                                <Text cursor="pointer">Point of Sale</Text>
                            </Flex>
                        </ul>
                    </GridItem>
                    <GridItem>
                        <Flex
                            direction={'column'}
                            alignItems={{ base: 'center', md: 'center' }}
                            fontSize={'2xl'}
                            fontWeight={'600'}
                            gap={[2, 4, 6]}
                        >
                            <Text>www.abc.com.vn</Text>
                            <Text>02 Nguyen Dinh Chinh, Phu Nhuan</Text>
                            <Text>+84 0000-0000</Text>
                            <Text>aptecthsaigon@gmail.com</Text>
                        </Flex>
                    </GridItem>
                    <GridItem>
                        <Flex
                            width={'100%'}
                            height={'100%'}
                            direction={'column'}
                            alignItems={{ base: 'center', md: 'center' }}
                            justifyContent="space-around"
                            gap='2rem'
                            padding={{md:'4rem'}}
                        >
                            <Text fontSize={"2xl"} fontWeight={"600"} px="2rem" lineHeight="">
                                Shipping & Return
                            </Text>
                            <Text fontSize={"2xl"} fontWeight={"600"}>F&Q</Text>
                            <div>
                                <HStack>
                                    <Button colorScheme="facebook" leftIcon={<FaFacebook />}>
                                        Facebook
                                    </Button>
                                    <Button colorScheme="twitter" leftIcon={<FaTwitter />}>
                                        Twitter
                                    </Button>
                                    <Button colorScheme="pink" leftIcon={<FaInstagram />}>
                                        Instagram
                                    </Button>
                                </HStack>
                            </div>
                        </Flex>
                    </GridItem>
                    <GridItem>
                        <Flex 
                        className="w-full" 
                        direction={'column'} 
                        alignItems={{ base: 'center', md: 'center' }} 
                        justifyContent="space-around" 
                        marginX='1rem' gap='1rem' 
                        padding={{base:'6rem', md:'4rem',lg:'2rem'}}
                        >
                            <Text fontSize={"2xl"} fontWeight={"600"}>Receive all our news and updates</Text>
                            <Input
                                borderColor="black"
                                borderWidth="2px"
                                borderRadius="md"
                                size="md"
                                focusBorderColor="black"
                                placeholder="Email Address"
                                _placeholder={{color:'brown'}}
                                height={'3rem'}
                            />
                            <Button colorScheme="yellow" width={'100%'} color={'white'} height={"3rem"}>
                                Subscribe Now
                            </Button>
                        </Flex>
                    </GridItem>
                </Grid>
            </div>
        </footer>
    );
}

export default Footer;
