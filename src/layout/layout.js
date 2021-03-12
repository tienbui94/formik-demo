import React from 'react';
import { Container } from '@chakra-ui/react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <Container maxW='container.lg'>{children}</Container>
            <Footer />
        </>
    );
};

export default Layout;
