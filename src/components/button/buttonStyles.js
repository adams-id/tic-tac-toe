import styled from 'styled-components/macro';
import * as s from '../../constants/styles';

export const Button = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: ${({ buttonWidth }) => buttonWidth ? buttonWidth : '100%' };
    padding: 10px;
    background: ${({buttonBgColor}) => buttonBgColor ? buttonBgColor: s.primaryColor};
    border-radius: 5px;
    color: ${({buttonTextColor}) => buttonTextColor ? buttonTextColor: s.backgroundColor};
    border: none;

    font: ${s.buttonText};
`;