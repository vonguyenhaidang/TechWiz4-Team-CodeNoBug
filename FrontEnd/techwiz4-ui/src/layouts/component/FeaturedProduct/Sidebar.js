import { LiaShippingFastSolid } from 'react-icons/lia';
import { BiLock } from 'react-icons/bi';
import { PiGear } from 'react-icons/pi';

import { Grid, GridItem } from '@chakra-ui/react';
const Sidebar = () => {
    return (
        <Grid maxWidth={'1440px'} mx={'auto'} templateColumns={{md: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)'}} gap={[4,4,6]}>
            <GridItem w="100%" h="100%" className="flex flex-col justify-center items-center pt-28 gap-20" >
                <LiaShippingFastSolid style={{ fontSize: '42px' }} className="text-yellow-700" />
                <div className="font-semibold text-4xl text-yellow-950">Free Shipping and Returns</div>
            </GridItem>
            <GridItem w="100%" h="100%" className="flex flex-col justify-center items-center pt-28 gap-20">
                <BiLock style={{ fontSize: '42px' }} className="text-yellow-700" />
                <div className="font-semibold text-4xl text-yellow-950"> Secured Payments</div>
            </GridItem>
            <GridItem w="100%" h="100%" className="flex flex-col justify-center items-center pt-28 gap-20">
                <PiGear style={{ fontSize: '42px' }} className="text-yellow-700" />
                <div className="font-semibold text-4xl text-yellow-950">Customer Service</div>
            </GridItem>
        </Grid>
    );
};

export default Sidebar;
