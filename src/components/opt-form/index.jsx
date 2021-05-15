import React from 'react';
import {
    Break,
    Button,
    Container,
    Input,
    Text
} from "./styles/OptFormStyle";

const OptForm = ({children, ...restProps}) => {
    return (
        <Container {...restProps}>{children}</Container>
    );
};

OptForm.Input = ({...restProps}) => {
    return <Input {...restProps} />
}

OptForm.Button = ({children, ...restProps}) => {
    return (
        <Button>
            {children} <img src='/images/icons/chevron-right.png' alt='Try Now'/>
        </Button>
    )
}

OptForm.Text = ({children, ...restProps}) => {
    return <Text {...restProps}>{children}</Text>
}

OptForm.Break = ({...restProps}) => {
    return <Break {...restProps}/>
}

export default OptForm;