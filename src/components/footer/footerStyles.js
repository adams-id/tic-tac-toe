import styled from 'styled-components/macro';
import  * as s from '../../constants/styles';

export const Frame = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    height: 45px;
    background: ${s.primaryColor};
    gap: 20px;
`;

export const Text = styled.p`
    font: ${s.footerText};
    color: ${s.backgroundColor};
    margin: 0;
    padding: 0;
`;

export const Icon = styled.img`
    height: 18px;
`;