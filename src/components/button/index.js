import React from 'react';
import { Button } from './buttonStyles';

export const ButtonComponent = ({buttonText, buttonWidth, ...restProps }) => {
    return (
        <Button buttonWidth={buttonWidth} {...restProps}>
            {buttonText}
        </Button>
    );
}