import React, { useState, useEffect } from 'react';
import { Header, Footer, BodyContainer, GameSettingsForm, Button } from '../components';
import boardSizes from '../fixtures/boardSizes.json';

const HomePage = () => {

    const [ gameData, updateGameData ] = useState({});
    const [winLengths] = useState([3, 4, 5]);

    const handleSubmit = e => {
        e.preventDefault();
        console.log(e);
    }

    const handleFieldChange = e => {
        // Update state
        console.log(gameData)
        console.log(e.target)
    }

    const handleBoardSizeChanges = e => {
        console.log(e);
    }

    return (
        <>
        <Header title="Noughts & Crosses - Home Page" />
        
        <BodyContainer>
            <GameSettingsForm submitHandler={handleSubmit}>

                <GameSettingsForm.FormItems>
                    <GameSettingsForm.SelectItem
                        id='boardSize' 
                        onChange={handleBoardSizeChanges}
                        label='Select Board Size:'>
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
                        onchange={handleFieldChange}
                        disabled >
                        {winLengths.map(item => (
                            <GameSettingsForm.SelectOption
                                key={`boardSizeOption-${item}`}
                                value={item}
                                text={item} />
                        ))}
                    </GameSettingsForm.SelectItem>

                    <GameSettingsForm.TextInputItem
                        id='playerOneName'
                        placeholder='Player 1 Name'
                        label='Player 1 Name'
                        value='Player 1'
                        onChange={handleFieldChange} />
                    
                    <GameSettingsForm.TextInputItem
                        id='playerTwoName'
                        placeholder='Player 2 Name'
                        label='Player 2 Name'
                        value='Player 2'
                        onChange={handleFieldChange} />
                </GameSettingsForm.FormItems>

                <Button type='submit' buttonText='start game' />
            </GameSettingsForm>
        </BodyContainer>
        
        <Footer />
        </>
    );
}

export default HomePage;