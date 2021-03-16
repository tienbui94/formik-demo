import React from 'react';

import { Grid, GridItem } from '@chakra-ui/react';
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
        <Grid m='0 auto' className='grid-form-user-information'>
            <GridItem>
                <InputField name={firstName.name} variant='outline' placeholder={firstName.label} />
                <InputField name={lastName.name} variant='outline' placeholder={lastName.label} />
                <InputField name={zipcode.name} variant='outline' placeholder={zipcode.label} />
                <InputField name={country.name} variant='outline' placeholder={country.label} />
                <InputField name={address1.name} variant='filled' placeholder={address1.label} />
                <InputField name={address2.name} variant='filled' placeholder={address2.label} />
                <InputField name={city.name} variant='outline' placeholder={city.label} />
                <InputField name={state.name} variant='outline' placeholder={state.label} />
            </GridItem>
        </Grid>
    );
};

export default AddressForm;
