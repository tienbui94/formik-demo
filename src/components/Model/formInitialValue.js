import formModel from './formModel';

const {
    formField: {
        firstName,
        lastName,
        address1,
        city,
        zipcode,
        country,
        useAddressForPaymentDetails,
        nameOnCard,
        cardNumber,
        expiryDate,
        cvv
    }
} = formModel;

const inititalValue = {
    [firstName.name]: '',
    [lastName.name]: '',
    [address1.name]: '',
    [city.name]: '',
    [zipcode.name]: '',
    [country.name]: '',
    [useAddressForPaymentDetails.name]: '',
    [nameOnCard.name]: '',
    [cardNumber.name]: '',
    [expiryDate.name]: '',
    [cvv.name]: ''
};

export default inititalValue;
