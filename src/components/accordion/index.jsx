import React, {createContext, useContext, useState} from 'react';
import {
    Body,
    Container,
    Frame,
    Header,
    Inner,
    Item,
    Title
} from "./styles/AccordionStyle";

const ToggleContext = createContext(false);

const Accordion = ({children, ...restProps}) => {
    return (
        <Container {...restProps}>
            <Inner>
                {children}
            </Inner>
        </Container>
    );
};

Accordion.Title = ({children, ...restProps}) => {
    return <Title {...restProps}>{children}</Title>
}
Accordion.Frame = ({children, ...restProps}) => {
    return <Frame {...restProps}>{children}</Frame>
}
Accordion.Item = ({children, ...restProps}) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [toggleShow, setToggleShow] = useState(false);
    return (
        <ToggleContext.Provider value={{toggleShow, setToggleShow}}>
            <Item {...restProps}>{children}</Item>
        </ToggleContext.Provider>
    );
}
Accordion.Header = ({children, ...restProps}) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {toggleShow, setToggleShow} = useContext(ToggleContext);
    return (
        <Header
            onClick={() => setToggleShow((toggleShow) => !toggleShow)}
            {...restProps}
        >
            {children}
            {/*<pre>{JSON.stringify(toggleShow, null, 1)}</pre>*/}
            {toggleShow ? (<img src='/images/icons/close-slim.png' alt='Close'/>
            ) : (
                <img src='/images/icons/add.png' alt='Open'/>
            )}
        </Header>);
}
Accordion.Body = ({children, ...restProps}) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {toggleShow} = useContext(ToggleContext);
    return toggleShow ? <Body {...restProps}>{children}</Body> : null;
}

export default Accordion;