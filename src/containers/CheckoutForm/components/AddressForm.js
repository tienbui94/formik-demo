import React from 'react';

import { Box, FormControl, FormLabel, FormErrorMessage, Input } from '@chakra-ui/react';
const AddressForm = ({ formField }) => {
    return (
        <Box>
            <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input tyle='email' />
                <FormErrorMessage></FormErrorMessage>

                <FormLabel>Password </FormLabel>
                <Input tyle='password' />
                <FormErrorMessage></FormErrorMessage>
            </FormControl>
        </Box>
    );
};

export default AddressForm;
