import React from 'react';
import { Frame, Text } from './gameMenuStyles';

export const GameMenuComponent = ({children, currentPlayerName, ...restProps}) => {
    return (
        <Frame {...restProps}>
            <p>Next Player: <Text>{currentPlayerName}</Text></p>
            {children}
        </Frame>       
    )
}