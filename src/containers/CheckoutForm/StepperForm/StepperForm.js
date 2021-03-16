import { useState } from 'react';
import { Grid, Heading, Button, Center, Box } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import Stepper from 'react-stepper-horizontal';
import inititalValue from '../../../components/Model/formInitialValue';

//validate form
import validateSchema from '../../../components/validationSchema/validationSchema';

//step form
import AddressForm from './components/AddressForm';
import CheckoutSuccess from './components/CheckoutSuccess';
import PaymentForm from './components/PaymentForm';
import ReviewOrder from './components/ReviewOrder';

import FormModel from '../../../components/Model/formModel';

const StepperForm = () => {
    const steps = [
        { title: 'Shipping address' },
        { title: 'Payment details' },
        { title: 'Review your order' }
    ];
    const [activeStep, setActiveStep] = useState(0);
    const { formId, formField } = FormModel;
    const isLastStep = activeStep === steps.length - 1;

    const currentValidateSchema = validateSchema[activeStep];

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
            <Grid gridTemplateColumns='15% 15%'>
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
            </Grid>
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
        <Box>
            <Grid w='100%' h='100%'>
                <Box as='div'>
                    <Center>
                        <Heading p='5' color='teal.700'>
                            Checkout
                        </Heading>
                    </Center>
                </Box>

                <Box as='div'>
                    <Stepper
                        completeColor='#07f2b8'
                        completeTitleColor='#07f2b8'
                        activeTitleColor='#e8b50c'
                        activeColor='#e8b50c'
                        steps={steps}
                        activeStep={activeStep}
                    />
                </Box>
                <>
                    {activeStep === steps.length ? (
                        <CheckoutSuccess />
                    ) : (
                        <Formik
                            validationSchema={currentValidateSchema}
                            initialValues={inititalValue}
                            onSubmit={_handleSubmit}>
                            {({ isSubmitting }) => (
                                <Form id={formId}>
                                    <Box p='5' m='5' className='form-area'>
                                        {_renderStepContent(activeStep)}

                                        {_renderListButton(isSubmitting)}
                                    </Box>
                                </Form>
                            )}
                        </Formik>
                    )}
                </>
            </Grid>
        </Box>
    );
};

export default StepperForm;
