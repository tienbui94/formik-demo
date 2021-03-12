import React from 'react';
import { Switch, Box, useColorMode } from '@chakra-ui/react';
const Header = () => {
    const { toggleColorMode } = useColorMode();
    return (
        <Box d='flex' justifyContent='flex-end' p='5'>
            <Switch onChange={toggleColorMode} colorScheme='facebook' />
        </Box>
    );
};

export default Header;
