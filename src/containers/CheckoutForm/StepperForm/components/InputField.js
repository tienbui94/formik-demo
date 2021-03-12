import React from 'react';
import { Input, Box } from '@chakra-ui/react';
import { useField } from 'formik';
import { at } from 'lodash';
const InputField = (props) => {
    const { variant, ...rest } = props;
    const [field, meta] = useField(props);

    console.log(meta, 'meta');
    function _renderErrorText() {
        const [touched, error] = at(meta, 'touched', 'error');

        if (touched && error) {
            return error;
        }
    }
    return (
        <>
            <Input variant={variant} m='2' type='text' size='sm' {...rest} {...field} />
            <Box ml='2' fontSize='10' color='red.500' as='span'>
                {_renderErrorText()}
            </Box>
        </>
    );
};

export default InputField;
