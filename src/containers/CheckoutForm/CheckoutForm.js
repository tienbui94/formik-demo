import { useState } from 'react';
import { Grid, Box, Heading, Button, Center, GridItem } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import Stepper from 'react-stepper-horizontal';
import inititalValue from '../../components/Model/formInitialValue';

//validate form
import validateSchema from '../../components/validationSchema/validationSchema';

//step form
import AddressForm from './components/AddressForm';
import CheckoutSuccess from './components/CheckoutSuccess';
import PaymentForm from './components/PaymentForm';
import ReviewOrder from './components/ReviewOrder';

import FormModel from '../../components/Model/formModel';

const CheckoutForm = () => {
    const steps = [
        { title: 'Shipping address' },
        { title: 'Payment details' },
        { title: 'Review your order' }
    ];
    const [activeStep, setActiveStep] = useState(0);
    const { formId, formField } = FormModel;
    const isLastStep = activeStep === steps.length - 1;
    console.log(
        {
            activeStep
        },
        steps.length,
        isLastStep
    );

    console.log({ formId, formField });
    const _renderStepContent = (step) => {
        switch (step) {
            case 0:
                return <AddressForm formField={formField} />;
            case 1:
                return <PaymentForm formField={formField} />;
            case 2:
                return <ReviewOrder formField={formField} />;
            default:
                return <div>404</div>;
        }
    };

    const _renderListButton = (isSubmitting) => {
        return (
            <GridItem>
                {activeStep !== 0 && (
                    <Button
                        ml='2'
                        size='sm'
                        colorScheme='teal'
                        variant='outline'
                        onClick={_handleBack}
                        className='btn-back'>
                        Back
                    </Button>
                )}

                <Button
                    size='sm'
                    ml='2'
                    colorScheme='telegram'
                    variant='outline'
                    disabled={isSubmitting}
                    type='submit'>
                    {isLastStep ? 'Place Order' : 'Next'}
                </Button>
            </GridItem>
        );
    };

    const _handleBack = () => {
        if (activeStep === 0) {
            return;
        }

        return setActiveStep(activeStep - 1);
    };

    const _submitForm = (values, actions) => {
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);

        setActiveStep(activeStep + 1);
    };

    const _handleSubmit = (values, actions) => {
        if (isLastStep) {
            _submitForm(values, actions);
        } else {
            setActiveStep(activeStep + 1);
            actions.setTouched({});
            actions.setSubmitting(false);
        }
    };

    return (
        <Grid w='100%' h='100%'>
            <GridItem>
                <Center>
                    <Heading p='5' color='teal.700'>
                        Checkout
                    </Heading>
                </Center>
            </GridItem>

            <GridItem>
                <Stepper activeColor='#a77' steps={steps} activeStep={activeStep} />
            </GridItem>
            <>
                {activeStep === steps.length ? (
                    <CheckoutSuccess />
                ) : (
                    <Formik
                        validationSchema={validateSchema}
                        initialValues={inititalValue}
                        onSubmit={_handleSubmit}>
                        {({ isSubmitting }) => (
                            <Form id={formId}>
                                <Grid
                                    gap='4'
                                    p='5'
                                    m='5'
                                    justifyContent='center'
                                    flexFlow='column'
                                    className='form-area'>
                                    {_renderStepContent(activeStep)}

                                    {_renderListButton(isSubmitting)}
                                </Grid>
                            </Form>
                        )}
                    </Formik>
                )}
            </>
        </Grid>
    );
};

export default CheckoutForm;
