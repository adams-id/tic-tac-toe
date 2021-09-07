import React, { useState } from 'react';
import { 
    Header, Footer, BodyContainer, GameSettingsForm, Button 
} from '../components';
import boardSizes from '../fixtures/boardSizes.json';
import { useHistory } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

const HomePage = () => {

    const [ gameData, setGameData ] = useState({
        boardSize: boardSizes[0].size,
        winLength: boardSizes[0].defaultWinLength,
        defaultWinLength: boardSizes[0].defaultWinLength,
        playerOneName: 'Player 1',
        playerTwoName: 'Player 2'
    });
    const [winLengths, setWinLengths] = useState(boardSizes
        .map(i => i.maxWinLength)
        .filter((value,index,self) => self.indexOf(value) === index)
    );
    const [disableLengthField, toggleDisableLengthField] = useState(true);

    const { push } = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        let boardSize = boardSizes.find(i => i.size === gameData.boardSize)
        if (gameData.winLength > boardSize.maxWinLength) {
            alert("The select win length cannot be greater than the board size")
            return
        }

        push({
            pathname: ROUTES.GAME,
            state: {
                gameData: {...gameData},
                fromHomePage: true,
                integerBoardSize: boardSize.maxWinLength
            }
        })
    }

    const handleFieldUpdate = e => {
        // Update state
        setGameData(prevState => {
            return {
                ...prevState,
                [e.target.id]: e.target.value
            }
        })
    }

    const handleBoardSizeChanges = e => {
        setGameData(prevState => {
            let newWinLength;
            let value = e.target.value;
            prevState.defaultWinLength = boardSizes
                .find(item => item.size === value).defaultWinLength
            disableLengthField
            ? newWinLength = prevState.defaultWinLength
            : newWinLength = prevState.winLength;
            prevState.boardSize = value;
            prevState.winLength = newWinLength;
            return prevState;
        });
        // Force react to re-render winLength select field options
        setWinLengths(prevState => [...prevState])
    }

    return (
        <>
        <Header title="Noughts & Crosses - Home Page" />
        
        <BodyContainer>
            <GameSettingsForm submitHandler={handleSubmit}>

                <GameSettingsForm.FormItems>
                    <GameSettingsForm.InputItem
                        id='disableLengthField'
                        label='Use default win lengths'
                        checked={disableLengthField}
                        type='checkbox'
                        onChange={() => {toggleDisableLengthField(prevState => !prevState)}}
                    />
                    <GameSettingsForm.SelectItem
                        id='boardSize'
                        onChange={handleBoardSizeChanges}
                        label='Select Board Size:'
                    >
                        {boardSizes.map(item => (
                            <GameSettingsForm.SelectOption
                                key={item.size}
                                value={item.size}
                                text={item.name} />
                        ))}
                    </GameSettingsForm.SelectItem>

                    <GameSettingsForm.SelectItem
                        id='winLength'
                        label='Item Length required to win:'
                        onChange={handleFieldUpdate}
                        disabled={disableLengthField}
                        value={disableLengthField ? gameData.defaultWinLength : undefined}
                    >
                        {winLengths.map(item => (
                            <GameSettingsForm.SelectOption
                                key={`boardSizeOption-${item}`}
                                value={item}
                                text={item}
                            />
                        ))}
                    </GameSettingsForm.SelectItem>

                    <GameSettingsForm.InputItem
                        id='playerOneName'
                        placeholder='Player 1 Name'
                        label='Player 1 Name'
                        value={gameData.playerOneName}
                        onChange={handleFieldUpdate} />
                    
                    <GameSettingsForm.InputItem
                        id='playerTwoName'
                        placeholder='Player 2 Name'
                        label='Player 2 Name'
                        value={gameData.playerTwoName}
                        onChange={handleFieldUpdate} />

                </GameSettingsForm.FormItems>

                <Button type='submit' buttonText='start game' />
            </GameSettingsForm>

        </BodyContainer>
        
        <Footer />
        </>
    );
}

export default HomePage;