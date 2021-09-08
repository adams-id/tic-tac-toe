import React from 'react';
import { Button } from './buttonStyles';

/**
 * Reusable button component
 * @param {{buttonText, buttonWidth, textColor, backgroundColor, *}} props
 * @returns The button JSX element
 */
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