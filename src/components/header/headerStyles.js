import styled from 'styled-components/macro';
import * as s from '../../constants/styles';

export const Frame = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 10px 10px 30px;
    height: 60px;
    background: ${s.primaryColor};
`;

export const H1 = styled.h1`
    font: ${s.h1Font};
    color: ${s.backgroundColor};
`;