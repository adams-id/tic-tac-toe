import React, { useState } from 'react';
import { Header, Footer, BodyContainer, GameBoard, GameMenu, Button } from '../components';
import { useLocation, useHistory, Redirect } from 'react-router-dom';
import { generateBoard2DArray } from '../logic';
import * as ROUTES  from '../constants/routes';
import * as sc from '../constants/styles';
import {
    checkWin,
    getCellArrays,
    shouldStopGame
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
    const [ gameOver, setGameOver ] = useState({
        isGameOver: false,
        win: false,
        winnerName: ''
    });
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
        push(ROUTES.HOME);
    }

    const goToResults = () => {
        push({
            pathname: ROUTES.RESULT,
            state: {
                gameData: state.gameData,
                integerBoardSize: state.integerBoardSize,
                fromGamePage: true,
                win: gameOver.win,
                winnerName: gameOver.winnerName
            }
        })
    }

    const handleGameOver = (win=false) => {
        setGameOver({
            isGameOver: true,
            win: win,
            winnerName: win ? currentPlayer.name : ''
        })
    }

    const handleCellClick = e => {
        let row = parseInt(e.target.dataset.row);
        let column = parseInt(e.target.dataset.column);

        const newArray = [...boardArray];
        newArray[row - 1][column - 1]['value'] = currentPlayer.value;

        // Get position arrays
        let cellArrays = getCellArrays(boardSize, row, column);

        // Check for a winner
        for (const array in cellArrays) {
            let result = checkWin(cellArrays[array], newArray, state.gameData.winLength, currentPlayer.value);
            if (result.win) {
                const newBoardArray = [...newArray];
                result.winCells.forEach(c => {
                    newBoardArray[c.row - 1][c.col - 1].winCell = true;
                })
                setBoardArray(newBoardArray);
                handleGameOver(true);
                return;
            }
        }

        // Check if it's a tie
        if (shouldStopGame(newArray)) {
            handleGameOver();
            return;
        }

        // Switch players
        if (currentPlayer.value === 'X') {
            setCurrentPlayer(playerData.O);
        } else {
            setCurrentPlayer(playerData.X);
        }

        // Update Game board state
        setBoardArray(newArray);
    }

    return (
        <>
        <Header title="Noughts & Crosses - Game Page" />
        
        <BodyContainer>
            <GameMenu currentPlayerName={currentPlayer.name}>
                {gameOver.isGameOver
                    ? <Button buttonText='Go to Results' onClick={goToResults} /> 
                    : <Button
                        buttonText={gameStarted ? 'exit game' : 'start playing'}
                        onClick={gameStarted ? exitGame : startPlaying}
                        backgroundColor={gameStarted ? sc.dangerColor : undefined}
                    />
                }
            </GameMenu>
            <GameBoard integerBoardSize={boardSize}>
                {boardArray.map(rowItem => 
                    rowItem.map(item => 
                        <GameBoard.Cell
                            key={item.cellId}
                            data-row={item.row}
                            data-column={item.column}
                            player={item.value}
                            winCell={item.winCell}
                            onClick={gameStarted && item.value === '' && !gameOver.isGameOver ? handleCellClick: undefined}
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