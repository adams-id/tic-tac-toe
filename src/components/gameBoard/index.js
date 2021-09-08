import React from 'react';
import { Frame, Cell } from './gameBoardStyles';
import * as sc from '../../constants/styles';

/**
 * JSX component for rendering the game board
 * @param {*} props
 * @returns 
 */
const GameBoardComponent = ({children, integerBoardSize=3, ...restProps}) => {
    return (
        <Frame size={integerBoardSize} {...restProps}>
            {children}
        </Frame>
    )
}

/**
 * JSX component for rendering the cells on the game board
 * @param {*} props
 * @returns 
 */
GameBoardComponent.Cell = ({children, player='', winCell=false, ...restProps}) => {

    let bgColor;
    let color;

    switch (player.toLowerCase()) {
        case 'x':
            bgColor = sc.xPlayerBgColor;
            color = sc.xPlayerColor;
            break;
        case 'o':
            bgColor = sc.oPlayerBgColor;
            color = sc.oPlayerColor;
            break;
        default:
            break;
    }
    return (
        <Cell
            playerBgColor={bgColor}
            playerColor={color}
            winCell={winCell}
            {...restProps}
        >
            {children}
        </Cell>
    )
}

export default GameBoardComponent;