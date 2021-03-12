import { useState } from 'react';
import { Box, Heading, Flex, Button } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import Stepper from 'react-stepper-horizontal';
import inititalValue from '../../components/Model/formInitialValue';

//step form
import AddressForm from './components/AddressForm';
import CheckoutSuccess from './components/CheckoutSuccess';
import PaymentForm from './components/PaymentForm';
import ReviewOrder from './components/ReviewOrder';

const CheckoutForm = () => {
    const steps = [{ title: 'First' }, { title: 'Second' }, { title: 'Third' }];
    const [activeStep, setActiveStep] = useState(0);

    const isLastStep = (activeStep) => steps.length - 1;

    const _renderStepContent = (step) => {
        switch (step) {
            case 0:
                return <AddressForm formField='formField' />;
            case 1:
                return <PaymentForm formField='formField' />;
            case 2:
                return <ReviewOrder formField='formField' />;
            default:
                return <div>404</div>;
        }
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
        <Box w='100%' height='50%' maxW='100%' d='flex' justifyContent='center' p='10' m='5'>
            <Flex
                w='100%'
                h='100%'
                minH='200px'
                flexWrap='wrap'
                justifyContent='center'
                boxShadow='1px 1px 1px 1px lightgray'>
                <Heading>Checkout</Heading>

                <Stepper steps={steps} activeStep={activeStep} />

                <>
                    {activeStep === steps.length ? (
                        <CheckoutSuccess />
                    ) : (
                        <Formik initialValues={inititalValue} onSubmit={_handleSubmit}>
                            {({ isSubmitting }) => (
                                <Form id='formExample'>
                                    {_renderStepContent(activeStep)}
                                    {activeStep !== 0 && (
                                        <div className='function-button'>
                                            <Button onClick={_handleBack} className='btn-back' />
                                        </div>
                                    )}
                                    <div className='function-button'>
                                        <Button
                                            colorScheme='telegram'
                                            variant='outline'
                                            disabled={isSubmitting}
                                            type='submit'>
                                            {isLastStep ? 'Place Order' : 'Next'}
                                        </Button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    )}
                </>
            </Flex>
        </Box>
    );
};

export default CheckoutForm;
