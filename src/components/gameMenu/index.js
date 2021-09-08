import React from 'react';
import { Frame, Text } from './gameMenuStyles';

/**
 * JSX component for rendering the gameplay menu
 * @param {*} props 
 * @returns 
 */
export const GameMenuComponent = ({children, currentPlayerName, ...restProps}) => {
    return (
        <Frame {...restProps}>
            <p>Next Player: <Text>{currentPlayerName}</Text></p>
            {children}
        </Frame>       
    )
}