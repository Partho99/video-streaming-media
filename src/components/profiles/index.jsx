import React from 'react';
import {Container, Item, List, Name, Picture, Title} from "./styles/ProfileStyles";

const Profiles = ({children, ...restProps}) => {
    return <Container {...restProps}>{children}</Container>
};


Profiles.Title = ({children, ...restProps}) => {
    return <Title {...restProps}>{children}</Title>
}

Profiles.List = ({children, ...restProps}) => {
    return <List {...restProps}>{children}</List>
}

Profiles.User = ({children, ...restProps}) => {
    return <Item {...restProps}>{children}</Item>
}

Profiles.Picture = ({src, children, ...restProps}) => {
    return <Picture {...restProps} src={src ? `/images/users/${src}.png` : `/images/misc/loading.gif`}/>
}

Profiles.Name = ({children, ...restProps}) => {
    return <Name {...restProps}>{children}</Name>
}


export default Profiles;