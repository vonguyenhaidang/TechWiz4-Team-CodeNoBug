import { Box, Card, CardBody, Flex, Stack, Text, Image } from '@chakra-ui/react';
import { Grid, GridItem, AbsoluteCenter } from '@chakra-ui/react';

const BoxRow = ({ children, ...rest }) => {
    return (
        <Box w={{ lg: '50%', base: 'full' }} rounded={4} overflow={'hidden'} p={2} {...rest}>
            {children}
        </Box>
    );
};

function Story() {
    return (
        <Box maxWidth={'1440px'} mx={'auto'} py={'6rem'}>
            <Flex flexWrap={'wrap'} paddingBottom={'2rem'}>
                <BoxRow>
                    <Card w={'full'}>
                        <CardBody>
                            <Image
                                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                alt="Green double couch with wooden legs"
                                borderRadius="lg"
                            />
                        </CardBody>
                    </Card>
                </BoxRow>
                <BoxRow>
                    <Card w={'full'}>
                        <CardBody>
                            <Image
                                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                alt="Green double couch with wooden legs"
                                borderRadius="lg"
                            />
                        </CardBody>
                    </Card>
                </BoxRow>
            </Flex>
            <Grid templateColumns={{ md: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)' }} gap={[4, 4, 6]}>
                <GridItem>
                    <Card w={'full'} h={'full'}>
                        <CardBody position="relative">
                            <Image
                                src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                                alt="Green double couch with wooden legs"
                                borderRadius="lg"
                                height={'full'}
                            />
                            <AbsoluteCenter p="4" axis="both">
                                <Text color="white" fontSize="4xl">
                                    Accestoires
                                </Text>
                            </AbsoluteCenter>
                            <Stack mt="6" spacing="3"></Stack>
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem>
                    <Card w={'full'} h={'full'}>
                        <CardBody position="relative">
                            <Image
                                src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                                alt="Green double couch with wooden legs"
                                borderRadius="lg"
                                height={'full'}
                            />
                            <AbsoluteCenter p="4" axis="both">
                                <Text color="white" fontSize="4xl">
                                    Accestoires
                                </Text>
                            </AbsoluteCenter>
                            <Stack mt="6" spacing="3"></Stack>
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem>
                    <Card w={'full'} h={'full'}>
                        <CardBody position="relative">
                            <Image
                                src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                                alt="Green double couch with wooden legs"
                                borderRadius="lg"
                                height={'full'}
                            />
                            <AbsoluteCenter p="4" axis="both">
                                <Text color="white" fontSize="4xl">
                                    Accestoires
                                </Text>
                            </AbsoluteCenter>
                            <Stack mt="6" spacing="3"></Stack>
                        </CardBody>
                    </Card>
                </GridItem>
            </Grid>
        </Box>
    );
}

export default Story;
