import React from 'react';
import { Frame, H1 } from './headerStyles';

/**
 * Reusable header component
 * @param {*} props 
 * @returns 
 */
export const HeaderComponent = ({title, ...restProps}) => {
    return (
        <Frame {...restProps}>
            <H1>{title}</H1>
        </Frame>
    );
}
