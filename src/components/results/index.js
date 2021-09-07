import React from 'react';
import { Container, Winner } from './resultStyle';

export const ResultComponent = ({children, ...restProps}) => {
    return (
        <Container {...restProps}>
            <Winner>  Thor Winns  </Winner>
            {children}
        </Container>
    )
};