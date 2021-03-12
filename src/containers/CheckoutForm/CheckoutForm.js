import { useState } from 'react';
import { Box, Heading, Flex, Button } from '@chakra-ui/react';
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
    const steps = [{ title: 'First' }, { title: 'Second' }, { title: 'Third' }];
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
            <Box justifyContent='flex-end' d='flex' mt='5'>
                {activeStep !== 0 && (
                    <Button
                        colorScheme='teal'
                        variant='outline'
                        onClick={_handleBack}
                        className='btn-back'>
                        Back
                    </Button>
                )}

                <Button
                    ml='4'
                    colorScheme='telegram'
                    variant='outline'
                    disabled={isSubmitting}
                    type='submit'>
                    {isLastStep ? 'Place Order' : 'Next'}
                </Button>
            </Box>
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
                    <Formik
                        validationSchema={validateSchema}
                        initialValues={inititalValue}
                        onSubmit={_handleSubmit}>
                        {({ isSubmitting }) => (
                            <Form id={formId}>
                                <Flex
                                    p='5'
                                    m='5'
                                    flexWrap='wrap'
                                    justifyContent='center'
                                    flexFlow='column'
                                    className='form-area'>
                                    {_renderStepContent(activeStep)}

                                    {_renderListButton(isSubmitting)}
                                </Flex>
                            </Form>
                        )}
                    </Formik>
                )}
            </>
        </Flex>
    );
};

export default CheckoutForm;
