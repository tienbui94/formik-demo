import React from 'react';
import { Box, Heading, Text, Stack } from '@chakra-ui/react';
const ReviewOrder = () => {
    return (
        <Box flexDirection='row'>
            <Stack spacing={3} mb='2' ml='2'>
                <Box>
                    <Heading isTruncated size='md'>
                        Payment Details
                    </Heading>
                    <Text fontSize='sm'>Example</Text>
                    <Text fontSize='sm'>Example</Text>
                    <Text fontSize='sm'>Example</Text>
                    <Text fontSize='sm'>Example</Text>
                </Box>

                <Box>
                    <Heading isTruncated size='md'>
                        Ship Details
                    </Heading>
                    <Text fontSize='sm'>Example</Text>
                    <Text fontSize='sm'>Example</Text>
                </Box>
            </Stack>
        </Box>
    );
};

export default ReviewOrder;
