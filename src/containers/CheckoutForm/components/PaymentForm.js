import React from 'react';
import { Box, FormControl, FormLabel, Input, FormErrorMessage } from '@chakra-ui/react';
const PaymentForm = ({ formField }) => {
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

export default PaymentForm;
