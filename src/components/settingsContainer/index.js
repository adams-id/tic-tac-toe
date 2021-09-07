import React from 'react';
import { 
    Container, Form, FormItems, InputGroup, Input, SelectGroup,
    Select, SelectOption, Label
} from './settingsStyles';

const SettingsContainerComponent = ({children, submitHandler, ...restProps}) => {

    return (
        <Container>
            <Form onSubmit={submitHandler} {...restProps}>
                {children}
            </Form>
        </Container>
    )
}

SettingsContainerComponent.FormItems = ({children, ...restProps}) => {
    return <FormItems>{children}</FormItems>
}

SettingsContainerComponent.InputItem = ({id, value, label, type='text', ...restProps}) => {
    return (
        <InputGroup>
            <Label htmlFor={id}>{label}</Label>
            <Input
                id={id}
                name={id}
                type={type}
                defaultValue={value}
                {...restProps}
            />
        </InputGroup>
    );
}

SettingsContainerComponent.SelectItem = ({children, id, label, ...restProps}) => {
    return (
        <SelectGroup>
            <Label htmlFor={id}>{label}</Label>
            <Select id={id} name={id} {...restProps}>
                {children}
            </Select>
        </SelectGroup>
    );
}

SettingsContainerComponent.SelectOption = ({text, value}) => {
    return <SelectOption value={value}>{text}</SelectOption>
}

export default SettingsContainerComponent;
