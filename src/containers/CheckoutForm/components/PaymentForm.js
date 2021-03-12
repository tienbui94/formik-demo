import React from 'react';
import { Grid, GridItem, Input } from '@chakra-ui/react';
const PaymentForm = ({ formField }) => {
    const { nameOnCard, cardNumber, expiryDate, cvv } = formField;
    return (
        <Grid>
            <GridItem rowSpan={2} colSpan={1}>
                <Input
                    m='2'
                    size='sm'
                    variant='filled'
                    placeholder={nameOnCard.label}
                    name={nameOnCard.name}
                />
                <Input
                    m='2'
                    size='sm'
                    variant='filled'
                    placeholder={cardNumber.label}
                    name={cardNumber.name}
                />
            </GridItem>
            <GridItem rowSpan={2} colSpan={1}>
                <Input
                    m='2'
                    size='sm'
                    variant='filled'
                    placeholder={expiryDate.label}
                    name={expiryDate.name}
                />
                <Input m='2' size='sm' variant='filled' placeholder={cvv.label} name={cvv.name} />
            </GridItem>
        </Grid>
    );
};

export default PaymentForm;
