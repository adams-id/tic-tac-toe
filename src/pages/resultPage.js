import React from 'react';
import { useHistory, useLocation, Redirect } from 'react-router-dom';
import { Header, Footer, Button, ResultMenu } from '../components';
import * as ROUTES  from '../constants/routes';

const ResultPage = () => {

    const { push } = useHistory();
    const { state } = useLocation();

    if (!state || !state.fromGamePage) {
        return <Redirect to={ROUTES.GAME} />
    }

    const resetGame = () => {
        push(ROUTES.HOME);
    }

    const gamePage = () => {
        push({
            pathname: ROUTES.GAME,
            state: {
                gameData: state.gameData,
                fromHomePage: true,
                integerBoardSize: state.integerBoardSize
            }
        })
    }

    return (
        <>
        <Header title="Noughts & Crosses - Result Page" />
        
        <ResultMenu resultText={ state.win ? `🎊🎊 ${state.winnerName} wins! 🎊🎊` : `It's a tie`}>
            <Button type='submit' buttonText='Play again' onClick={gamePage}/>
            <Button type='submit' buttonText='Go back to Main Menu' onClick={resetGame}/>
        </ResultMenu>
            

        <Footer />
        </>
    );
}

export default ResultPage;