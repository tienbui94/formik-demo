import React, { useRef, useEffect } from 'react';
import { Grid, Box, Container, Heading, Stack } from '@chakra-ui/react';
const CheckBox = () => {
    const titleRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            titleRef.current.textContent = 'Beautiful Mistake';
        }, 2000);
    }, []);

    return (
        <Grid
            minH='100vh'
            gridTemplateAreas='"header header header header" "sidebar main main main " "footer footer footer footer"'
            gridTemplateColumns='repeat(4, 1fr)'
            gridTemplateRows='auto'
            gap={2}>
            <Box
                alignItems='center'
                d='flex'
                justifyContent='center'
                gridArea='header'
                as='div'
                backgroundColor='teal.500'>
                <Stack spacing={4}>
                    <Heading as='h2' size='xl'>
                        BUI QUANG TU
                    </Heading>
                    <Heading as='h4' size='sm'>
                        VLOG
                    </Heading>
                </Stack>
            </Box>
            <Container
                ref={titleRef}
                d='flex'
                justifyContent='center'
                gridArea='sidebar'
                backgroundColor='teal.500'
                as='div'
                alignItems='center'>
                <div>Sidebar</div>
            </Container>
            <Box
                alignItems='center'
                d='flex'
                minH='500px'
                justifyContent='center'
                gridArea='main'
                backgroundColor='teal.500'
                as='div'>
                Content
            </Box>
            <Box
                alignItems='center'
                minH='100'
                position='static'
                bottom='0'
                left='4'
                right='4'
                d='flex'
                justifyContent='center'
                gridArea='footer'
                backgroundColor='teal.500'
                as='div'>
                Copyright &#8471; by Tien Bui
            </Box>
        </Grid>
    );
};

export default CheckBox;
