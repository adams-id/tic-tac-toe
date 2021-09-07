import React from 'react';
import { Frame, Cell } from './gameBoardStyles';
import * as sc from '../../constants/styles';

const GameBoardComponent = ({children, integerBoardSize=3, ...restProps}) => {
    return (
        <Frame size={integerBoardSize} {...restProps}>
            {children}
        </Frame>
    )
}

GameBoardComponent.Cell = ({children, player='', ...restProps}) => {

    let bgColor;
    let color;
    let value;

    switch (player.toLowerCase()) {
        case 'x':
            bgColor = sc.xPlayerBgColor;
            color = sc.xPlayerColor;
            value = 'x';
            break;
        case 'o':
            bgColor = sc.oPlayerBgColor;
            color = sc.oPlayerColor;
            value = 'o';
            break;
        default:
            break;
    }
    return (
        <Cell
            playerBgColor={bgColor}
            playerColor={color}
            {...restProps}
        >
            {children}
        </Cell>
    )
}

export default GameBoardComponent;