import React from 'react';
import { Input, FormErrorMessage } from '@chakra-ui/react';
import { useField } from 'formik';
import { at } from 'lodash';
const InputField = (props) => {
    const { variant, ...rest } = props;
    const [field, meta] = useField(props);

    function _renderErrorText() {
        const [touched, error] = at(meta, 'touched', 'error');
        if (touched && error) {
            return error;
        }
    }
    return (
        <>
            <Input variant={variant} m='2' type='text' size='sm' {...rest} {...field} />
            <FormErrorMessage>{_renderErrorText()}</FormErrorMessage>
        </>
    );
};

export default InputField;
