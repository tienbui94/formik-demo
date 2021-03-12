import * as Yup from 'yup';
import formModel from '../Model/formModel';
import moment from 'moment';
const {
    formField: {
        firstName,
        lastName,
        address1,
        city,
        zipcode,
        country,
        nameOnCard,
        cardNumber,
        expiryDate,
        cvv
    }
} = formModel;

//regex for visa card
const visaRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;

const validateSchema = [
    Yup.object().shape({
        // init validate field here
        [firstName.name]: Yup.string().required(`${firstName.requiredErrorMsg}`),
        [lastName.name]: Yup.string().required(`${lastName.requiredErrorMsg}`),
        [address1.name]: Yup.string()
            .min(10, 'Only Allow 10 char minimum!')
            .required(`${address1.requiredErrorMsg}`),
        [city.name]: Yup.string().required(`${city.requiredErrorMsg}`),
        [zipcode.name]: Yup.string()
            .required(`${zipcode.requiredErrorMsg}`)
            .test('len', `${zipcode.invalidErrorMsg}`, (val) => val && val.length === 5),
        [country.name]: Yup.string().required(`${country.requiredErrorMsg}`)
    }),
    Yup.object().shape({
        [nameOnCard.name]: Yup.string().required(`${nameOnCard.requiredErrorMsg}`),
        [cardNumber.name]: Yup.string()
            .required(`${cardNumber.requiredErrorMsg}`)
            .matches(visaRegex, cardNumber.invalidErrorMsg),
        [expiryDate.name]: Yup.string()
            .required(`${expiryDate.requiredErrorMsg}`)
            .test('expDate', expiryDate.invalidErrorMsg, (val) => {
                if (val) {
                    const startDate = new Date();
                    const endDate = new Date(2050, 12, 31);
                    if (moment(val, moment.ISO_8601).isValid()) {
                        return moment(val).isBetween(startDate, endDate);
                    }
                    return true;
                }
                return true;
            }),
        [cvv.name]: Yup.string()
            .required(`${cvv.requiredErrorMsg}`)
            .test('len', `${cvv.invalidErrorMsg}`, (val) => val && val.length === 3)
    })
];

export default validateSchema;
