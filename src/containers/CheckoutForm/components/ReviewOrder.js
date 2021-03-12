import React from 'react';
import { GridItem, Box, Heading, Text, Stack } from '@chakra-ui/react';
const ReviewOrder = () => {
    return (
        <>
            <GridItem w='100%' colSpan='1' rowSpan='2'>
                <Box>
                    <Stack spacing={3} mb='2' ml='2'>
                        <Heading isTruncated size='md'>
                            Payment Details
                        </Heading>
                        <Text fontSize='sm'>Example</Text>
                        <Text fontSize='sm'>Example</Text>
                        <Text fontSize='sm'>Example</Text>
                        <Text fontSize='sm'>Example</Text>
                    </Stack>
                </Box>
            </GridItem>
            <GridItem colSpan='1' rowSpan='2'>
                <Box>
                    <Stack spacing={3} mb='2' ml='2'>
                        <Heading isTruncated size='md'>
                            Ship Details
                        </Heading>
                        <Text fontSize='sm'>Example</Text>
                        <Text fontSize='sm'>Example</Text>
                    </Stack>
                </Box>
            </GridItem>
        </>
    );
};

export default ReviewOrder;
