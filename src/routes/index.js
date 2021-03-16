import StepperForm from '../containers/CheckoutForm/StepperForm/StepperForm';
import CheckBox from '../containers/CheckBox';
const routes = [
    {
        path: '/',
        component: StepperForm
    },
    {
        path: '/formik',
        component: StepperForm
    },
    {
        path: '/check-box',
        component: CheckBox
    }
];

export default routes;
