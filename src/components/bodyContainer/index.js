import React from 'react';
import { Frame } from './bodyContainerStyles';

/**
 * Body container component that wraps all page items that aren't in the
 * header or footer.
 * @param {*} props 
 * @returns The Body container `JSX` element
 */
export const BodyContainerComponent = ({children, ...restProps}) => {
    return <Frame {...restProps}>{children}</Frame>;
}