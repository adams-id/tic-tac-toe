import React, { useState } from 'react';
import { Header, Footer, BodyContainer, GameBoard, GameMenu, Button } from '../components';
import { useLocation, useHistory, Redirect } from 'react-router-dom';
import { generateBoard2DArray } from '../logic';
import * as ROUTES  from '../constants/routes';
import * as sc from '../constants/styles';

const GamePage = () => {

    const { state } = useLocation();
    const [ boardArray, setBoardArray ] = useState([[]]);
    const [ currentPlayer, setCurrentPlayer ] = useState({
        name: '',
        value: ''
    });
    const [ gameStarted, setGameStarted] = useState(false);
    const [ playerData, setPlayerData ] = useState({
        X: {name: '', value: 'X'},
        O: {name: '', value: 'O'}
    })
    const { push } = useHistory();

    /* If this page is not redirected from the start button in the home page,
    return it to the home page as it would be missing required properties */
    if (!state || !state['fromHomePage']) {
        return <Redirect to={ROUTES.HOME} />
    }

    let initial2DBoardArray = generateBoard2DArray(state.integerBoardSize);

    const startPlaying = () => {
        setGameStarted(true);
        setBoardArray(initial2DBoardArray);
        setPlayerData({
            X: {name: state.gameData.playerOneName, value: 'X'},
            O: {name: state.gameData.playerTwoName, value: 'O'}
        })
        setCurrentPlayer({
            name: state.gameData.playerOneName,
            value: 'X'
        })
    }

    const exitGame = () => {
        push(ROUTES.HOME);
    }

    const handleCellClick = e => {
        let row = parseInt(e.target.dataset.row) - 1;
        let column = parseInt(e.target.dataset.column) - 1;
        let innerText = e.target.innerText;
        
        if (innerText === '') {
            const newArray = [...boardArray];
            newArray[row][column]['value'] = currentPlayer.value;
            setBoardArray(newArray);
        }
        if (currentPlayer.value === 'X') {
            setCurrentPlayer(playerData.O);
        } else {
            setCurrentPlayer(playerData.X);
        }
    }

    return (
        <>
        <Header title="Noughts & Crosses - Game Page" />
        
        <BodyContainer>
            <GameMenu currentPlayerName={currentPlayer.name}>
                <Button
                    buttonText={gameStarted ? 'exit game' : 'start playing'}
                    onClick={gameStarted ? exitGame : startPlaying}
                    backgroundColor={gameStarted ? sc.dangerColor : undefined}
                />
            </GameMenu>
            <GameBoard integerBoardSize={state.integerBoardSize}>
                {boardArray.map(rowItem => 
                    rowItem.map(item => 
                        <GameBoard.Cell
                            key={item.cellId}
                            data-row={item.row}
                            data-column={item.column}
                            player={item.value}
                            onClick={gameStarted ? handleCellClick: undefined}
                        >
                            {item.value}
                        </GameBoard.Cell>
                    )
                )}
            </GameBoard>
        </BodyContainer>
        
        <Footer />
        </>
    );
}

export default GamePage;