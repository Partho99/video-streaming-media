import React from 'react';
import {Link as ReactRouterLink} from 'react-router-dom';
import {
    Background,
    ButtonLink,
    Container,
    Logo
} from "./styles/HeaderStyle";

const Header = ({bg = true, children, ...restProps}) => {
    return bg ? <Background {...restProps}>{children}</Background> : children;
};

Header.Frame = ({children, ...restProps}) => {
    return <Container {...restProps}>{children}</Container>
}

Header.ButtonLink = ({children, ...restProps}) => {
    return <ButtonLink {...restProps}>{children}</ButtonLink>
}

Header.Logo = ({to, ...restProps}) => {
    return (
        <ReactRouterLink to={to}>
            <Logo {...restProps}/>
        </ReactRouterLink>
    )
}


export default Header;