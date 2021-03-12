import React from 'react';

import { Box, GridItem } from '@chakra-ui/react';
import InputField from './InputField';
const AddressForm = ({ formField }) => {
    const {
        firstName,
        lastName,
        address1,
        address2,
        city,
        state,
        zipcode,
        country
        // useAddressForPaymentDetails
    } = formField;

    return (
        <Box>
            <GridItem colSpan={2}>
                <InputField name={firstName.name} variant='outline' placeholder={firstName.label} />
                <InputField name={lastName.name} variant='outline' placeholder={lastName.label} />
            </GridItem>

            <GridItem colSpan={1}>
                <InputField name={zipcode.name} variant='outline' placeholder={zipcode.label} />
            </GridItem>
            <GridItem colSpan={1}>
                <InputField name={country.name} variant='outline' placeholder={country.label} />
            </GridItem>
            <GridItem colSpan={2}>
                <InputField name={address1.name} variant='filled' placeholder={address1.label} />
                <InputField name={address2.name} variant='filled' placeholder={address2.label} />
            </GridItem>
            <GridItem colSpan={2}>
                <InputField name={city.name} variant='outline' placeholder={city.label} />
            </GridItem>
            <GridItem colSpan={2}>
                <InputField name={state.name} variant='outline' placeholder={state.label} />
            </GridItem>
        </Box>
    );
};

export default AddressForm;
