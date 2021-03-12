import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import InputField from './InputField';
const PaymentForm = ({ formField }) => {
    const { nameOnCard, cardNumber, expiryDate, cvv } = formField;
    return (
        <Grid>
            <GridItem rowSpan={2} colSpan={1}>
                <InputField
                    variant='filled'
                    placeholder={nameOnCard.label}
                    name={nameOnCard.name}
                />
                <InputField
                    variant='filled'
                    placeholder={cardNumber.label}
                    name={cardNumber.name}
                />
            </GridItem>
            <GridItem rowSpan={2} colSpan={1}>
                <InputField
                    variant='filled'
                    placeholder={expiryDate.label}
                    name={expiryDate.name}
                />
                <InputField variant='filled' placeholder={cvv.label} name={cvv.name} />
            </GridItem>
        </Grid>
    );
};

export default PaymentForm;
