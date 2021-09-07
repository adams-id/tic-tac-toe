import React from 'react';
import { Button } from './buttonStyles';

export const ButtonComponent = ({
    buttonText, buttonWidth, textColor, backgroundColor, ...restProps
}) => {
    return (
        <Button
            buttonWidth={buttonWidth}
            buttonTextColor={textColor}
            buttonBgColor={backgroundColor}
            {...restProps}>
            {buttonText}
        </Button>
    );
}