import Tippy from '@tippyjs/react/headless';
import { Box, Spinner, Input, Button, Text } from '@chakra-ui/react';
import { FaRegCircleXmark } from 'react-icons/fa6';
import { BsSearch } from 'react-icons/bs';
import { useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import ProductItem from './ProductItem';

const cx = classNames.bind(styles);
function Search() {
    const [searchProducts, setSearchProducts] = useState([]);
    const [searchValue, setSearchValue] = useState([]);
    const [showResult, setShowResuilt] = useState(true);

    const inputRef = useRef();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users?q=lea`)
            .then((res) => res.json())
            .then((res) => setSearchProducts(res));
    }, [searchValue]);

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
        setSearchProducts([]);
    };
    const handleHideResuilt = () => {
        setShowResuilt(false);
    };
    return (
        <Tippy
            visible={showResult && searchProducts.length > 0}
            interactive
            render={(attrs) => (
                <Box
                    className={cx('search-result')}
                    tabIndex={'-1'}
                    {...attrs}
                    width="361px"
                    paddingTop={'8px'}
                    maxHeight={'min((100vh-96px)-60px,734px)'}
                    minHeight="100px"
                    borderRadius={'8px'}
                    backgroundColor={'#fff'}
                    boxShadow={'md'}
                    fontSize="4xl"
                >
                    <div className={cx('search-resuilt')}>
                        <Text className={cx('text-title')} fontSize="xl" fontWeight={'600'} color={'blackAlpha.500'}>
                            Products
                        </Text>

                        {searchProducts.map((product) => (
                            <ProductItem key={product.id} data={product} />
                        ))}
                        {/* <ProductItem />
                        <ProductItem /> */}
                    </div>
                </Box>
            )}
            onClickOutside={handleHideResuilt}
        >
            <Box
                className={cx('search')}
                display={'flex'}
                position={'relative'}
                alignItems={'center'}
                width={'361px'}
                height={'46px'}
                backgroundColor={'gray.200'}
                borderRadius={'96px'}
                paddingY={'12px'}
                paddingLeft={'16px'}
                _focus={{ outline: '2px solid blue', boxShadow: '0 0 5px blue' }}
            >
                <Input
                    className={cx('input')}
                    ref={inputRef}
                    value={searchValue}
                    flex="1"
                    placeholder="Search Product"
                    spellCheck={false}
                    fontSize="1.6rem"
                    height={'46px'}
                    color="black "
                    bg="transparent"
                    variant="unstyled"
                    focusBorderColor="Brown"
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResuilt(true)}
                />
                {!!searchValue && (
                    <Button
                        className={cx('clear')}
                        position={'absolute'}
                        right={'52px'}
                        height={'46px'}
                        bg="transparent"
                        onClick={handleClear}
                    >
                        {/* clear */}
                        <FaRegCircleXmark fontSize="2rem" color="gray" />
                    </Button>
                )}
                {/* <Button className={cx('loading')} position={'absolute'} right={'52px'} height={'46px'} bg="transparent">
                    <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="gray.500" size="lg" />
                </Button> */}
                <Button
                    className={cx('search-btn')}
                    width="52px"
                    height="46px"
                    bg="transparent"
                    cursor={'pointer'}
                    _hover={{
                        borderTopRightRadius: '96px',
                        borderBottomRightRadius: '96px',
                        backgroundColor: 'yellow.500',
                    }}
                >
                    {/* Search */}
                    <BsSearch id="search-btn" fontSize="2rem" color="gray" />
                </Button>
            </Box>
        </Tippy>
    );
}

export default Search;
