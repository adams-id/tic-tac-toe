import React from 'react';
import { useHistory } from 'react-router-dom';
import { Header, Footer, Button, ResultMenu, } from '../components';
import * as ROUTES  from '../constants/routes';

const ResultPage = () => {

    const history = useHistory();

    const resetGame = () => {
        let path = '/'
        history.push(path);
    }

    return (
        <>
        <Header title="Noughts & Crosses - Results Page" />
        
        <ResultMenu >
            <Button type='submit' buttonText='Play again' />
            <Button type='submit' buttonText='Reset game' onclick={resetGame}/>
        </ResultMenu>
            
        <Footer />
        </>
    );
}

export default ResultPage;