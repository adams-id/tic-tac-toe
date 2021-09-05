import styled from 'styled-components/macro';
import * as s from '../../constants/styles';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 32px;
    background: ${s.secondaryColor};
    border-radius: 8px;

    width: 500px;
    height: 100%;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    border-radius: 4px;
    width: 100%;
    height: 100%;
`;

export const FormItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    height: 70%;
    width: 100%;
`;

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 0px;
    width: 100%;
`;

export const Input = styled.input`
    font: ${s.formInputText};
    background: ${s.backgroundColor};
    width: 100%;
    border: none;
    padding: 6px;

    :focus {
        outline: none;
    }
`;

export const SelectGroup = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 0px;
    width: 100%;
`;

export const Select = styled.select`
    font: ${s.formInputText};
    background: ${s.backgroundColor};
    width: 100%;
    border: none;
    padding: 6px;

    :focus {
        outline: none;
    }
`;

export const SelectOption = styled.option`
    font: ${s.formInputText};
    background: ${s.backgroundColor};
`;

export const Label = styled.label`
    font: ${s.formLabelText};
    color: ${s.textColor}
`;