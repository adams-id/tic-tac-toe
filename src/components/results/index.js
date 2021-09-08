import React from 'react';
import { Container, Winner } from './resultStyle';

/**
 * JSX component for rendering the game result
 * @param {*} props 
 * @returns 
 */
export const ResultComponent = ({children, resultText, ...restProps}) => {
    return (
        <Container {...restProps}>
            <Winner>  {resultText} </Winner>
            {children}
        </Container>
    )
};