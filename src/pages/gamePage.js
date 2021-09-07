import React, { useState } from 'react';
import { Header, Footer, BodyContainer, GameBoard, GameMenu, Button } from '../components';
import { useLocation, useHistory, Redirect } from 'react-router-dom';
import { generateBoard2DArray } from '../logic';
import * as ROUTES  from '../constants/routes';
import * as sc from '../constants/styles';
import {
    checkWin,
    getCellArrays
} from '../logic/game';

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

    let boardSize = state.integerBoardSize;

    const startPlaying = () => {
        setGameStarted(true);
        setBoardArray(generateBoard2DArray(boardSize));
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
        push(ROUTES.RESULT);
    }

    const handleCellClick = e => {
        let row = parseInt(e.target.dataset.row);
        let column = parseInt(e.target.dataset.column);
        let innerText = e.target.innerText;
        // let win = false;
        
        if (!innerText === '') {
            return;
        }

        const newArray = [...boardArray];
        newArray[row - 1][column - 1]['value'] = currentPlayer.value;
        setBoardArray(newArray);

        // Get position arrays
        let cellArrays = getCellArrays(boardSize, row, column);

        for (const array in cellArrays) {
            let result = checkWin(cellArrays[array], newArray, state.gameData.winLength, currentPlayer.value);
            if (result.win) {
                alert("Game over")
            }
        }


        // Switch players
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
            <GameBoard integerBoardSize={boardSize}>
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