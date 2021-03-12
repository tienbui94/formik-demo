import React from 'react';

import { Grid, GridItem, Input } from '@chakra-ui/react';
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
        <Grid templateColumns='repeat(2, 1fr)' gap={2}>
            <GridItem colSpan={1}>
                <Input
                    size='sm'
                    name={firstName.name}
                    m='2'
                    variant='outline'
                    placeholder={firstName.label}></Input>
            </GridItem>
            <GridItem colSpan={1}>
                <Input
                    size='sm'
                    name={lastName.name}
                    m='2'
                    variant='outline'
                    placeholder={lastName.label}></Input>
            </GridItem>
            <GridItem colSpan={1}>
                <Input
                    size='sm'
                    name={zipcode.name}
                    m='2'
                    variant='outline'
                    placeholder={zipcode.label}></Input>
            </GridItem>
            <GridItem colSpan={1}>
                <Input
                    size='sm'
                    name={country.name}
                    m='2'
                    variant='outline'
                    placeholder={country.label}></Input>
            </GridItem>
            <GridItem colSpan={2}>
                <Input
                    size='sm'
                    name={address1.name}
                    m='2'
                    variant='filled'
                    placeholder={address1.label}></Input>
                <Input
                    size='sm'
                    name={address2.name}
                    m='2'
                    variant='filled'
                    placeholder={address2.label}></Input>
            </GridItem>
            <GridItem colSpan={1}>
                <Input
                    size='sm'
                    name={city.name}
                    m='2'
                    variant='outline'
                    placeholder={city.label}></Input>
            </GridItem>
            <GridItem colSpan={1}>
                <Input
                    size='sm'
                    name={state.name}
                    m='2'
                    variant='outline'
                    placeholder={state.label}></Input>
            </GridItem>
        </Grid>
    );
};

export default AddressForm;
