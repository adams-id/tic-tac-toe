import React from 'react';
import { Frame } from './bodyContainerStyles';

export const BodyContainerComponent = ({children, ...restProps}) => {
    return <Frame {...restProps}>{children}</Frame>;
}