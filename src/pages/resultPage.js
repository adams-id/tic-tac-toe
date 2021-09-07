import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header, Footer, BodyContainer, Button } from '../components';

const ResultPage = ({}) => {

    return (
        <>
        <Header title="Noughts & Crosses - Results Page" />
        
        <BodyContainer>
            <Button type='submit' buttonText='Reset game'/>
        </BodyContainer>
        
        <Footer />
        </>
    );
}

export default ResultPage;