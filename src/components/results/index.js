import React from 'react';
import { Container, Winner } from './resultStyle';

export const ResultComponent = ({children, resultText, ...restProps}) => {
    return (
        <Container {...restProps}>
            <Winner>  {resultText} </Winner>
            {children}
        </Container>
    )
};