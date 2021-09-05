import React from 'react';
import { Frame, Text, Icon } from './footerStyles';

export const FooterComponent = ({...restProps}) => {
    return(
        <Frame {...restProps}>
            <Text>Designed by Idris Adams</Text>
            <a href='https://github.com/adams-id'>
                <Icon src='/assets/icons/github-logo.svg' />
            </a>
        </Frame>
    );
}
