import styled from 'styled-components/macro';
import * as s from '../../constants/styles';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding: 20px;
    background: ${s.secondaryColor};
    border-radius: 8px;

    width: 500px;
    height: 60%;
    gap: 20px;
`;

export const Winner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 30px;
    height: 60%;
`;