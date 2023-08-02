import { NavLink } from 'react-router-dom';
import { Flex, Box, Button, useDisclosure,Icon } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { BsMinecart } from 'react-icons/bs';
import MainNavigation from '../../../component/MainNavi/MainNavigation';
import Context from '../../../component/store/Context';
import { useContext } from 'react';
import ShopContext from '../../../component/GlobalStates/ShopContext'
import Search from './Search';

function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const context = useContext(ShopContext);
    const storeContext = useContext(Context)
    const [state,dispatch] =storeContext
    const {condition}=state
    return (
        <Flex
            maxWidth={'1440px'}
            mx={'auto'}
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding="1rem"
            color="black"
        >
            <Box fontSize={{ base: '2xl', md: '4xl' }} fontWeight="bold">
                GIOVANNI
            </Box>
            <Box>
                <Search />
            </Box>
            {/* Toggle button cho responsive */}
            <Box display={{ base: 'block', md: 'none' }}>
                <Button
                    
                    onClick={isOpen ? onClose : onOpen}
                    size={'lg'}
                    colorScheme="gray"
                >
                    {isOpen ? <CloseIcon /> :<HamburgerIcon />}
                </Button>
            </Box>

            {/* Danh sách các mục menu */}
            <Box
                display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
                width={{ base: 'full', md: 'auto' }}
                justifyContent={{ base: 'center', md: 'end' }}
                alignItems="center"
                // flexGrow={1}
                fontWeight={{ base: '600' }}
                fontSize={{ base: '4xl', md: '4xl' }}
                padding={{ md: '1rem' }}
            >
                <Flex
                    // display={'flex'}
                    align={{ base: 'center' }}
                    justify={{ base: 'center', md: 'flex-end' }}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={8}
                >
                    <Box _hover={{ bg: 'gray.100' }} cursor="pointer" padding={{ base: '1rem' }}>
                        <NavLink to="/">Home</NavLink>
                    </Box>
                    <Box _hover={{ bg: 'gray.100' }} cursor="pointer" padding={{ base: '1rem' }}>
                        <NavLink to="/category">Category</NavLink>
                    </Box>
                    <Box _hover={{ bg: 'gray.100' }} cursor="pointer" padding={{ base: '1rem' }}>
                        <NavLink to="/about">About</NavLink>
                    </Box>
                    <Box _hover={{ bg: 'gray.100' }} cursor="pointer" padding={{ base: '1rem' }}>
                        <NavLink to="/pointofsale">Point of Sale</NavLink>{' '}
                    </Box>
                </Flex>
            </Box>
            <Box  display={{base:'none',md:'block'}}>
             <Icon as={BsMinecart} boxSize={{base:'3rem', md:'3rem'}}/>
             <MainNavigation
                    cartItemNumber={context.cart.reduce((count, curItem) => {
                      return count + curItem.quantity * 1;
                    }, 0)}
                  />
            </Box>
        </Flex>
    );
}

export default Header;
