import styled from 'styled-components/macro';
import * as s from '../../constants/styles';

export const Frame = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 500px;
    font: ${s.formLabelText};
`;

export const Text  = styled.span`
    font: ${s.formInputText};
`;