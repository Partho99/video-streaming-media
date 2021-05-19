import React, {useState} from 'react';
import {Link as ReactRouterLink} from 'react-router-dom';
import {
    Background,
    ButtonLink,
    Container,
    Logo,
    Feature,
    Text,
    FeatureCallOut,
    TextLink,
    Group,
    Picture,
    Profile,
    Dropdown,
    Search,
    SearchIcon,
    SearchInput,
    PlayButton
} from "./styles/HeaderStyle";

const Header = ({bg = true, children, ...restProps}) => {
    return bg ? <Background {...restProps}>{children}</Background> : children;
};

Header.Text = ({children, ...restProps}) => {
    return <Text {...restProps}>{children}</Text>
}

Header.TextLink = ({children, ...restProps}) => {
    return <TextLink {...restProps}>{children}</TextLink>
}

Header.FeatureCallOut = ({children, ...restProps}) => {
    return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
}


Header.Feature = ({children, ...restProps}) => {
    return <Feature {...restProps}>{children}</Feature>
}

Header.Frame = ({children, ...restProps}) => {
    return <Container {...restProps}>{children}</Container>
}
Header.Group = ({children, ...restProps}) => {
    return <Group {...restProps}>{children}</Group>
}

Header.ButtonLink = ({children, ...restProps}) => {
    return <ButtonLink {...restProps}>{children}</ButtonLink>
}

Header.Profile = ({children, ...restProps}) => {
    return <Profile {...restProps}>{children}</Profile>
}

Header.Search = ({searchTerm, setSearchTerm, ...restProps}) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [searchActive, setSearchActive] = useState(false);
    return <Search {...restProps}>
        <SearchIcon onClick={() => setSearchActive(searchActive => !searchActive)}>
            <img src='/images/icons/search.png' alt='search'/>
        </SearchIcon>
        <SearchInput
            value={searchTerm}
            onChange={({target}) => setSearchTerm(target.value)}
            placeholder='Search films and series'
            active={searchActive}
        />
    </Search>
}

Header.Dropdown = ({children, ...restProps}) => {
    return <Dropdown {...restProps}>{children}</Dropdown>
}

Header.Picture = ({src, children, ...restProps}) => {
    return <Picture {...restProps} src={`/images/users/${src}.png`}/>
}

Header.Logo = ({to, ...restProps}) => {
    return (
        <ReactRouterLink to={to}>
            <Logo {...restProps}/>
        </ReactRouterLink>
    )
}

Header.PlayButton = ({children, ...restProps}) => {
    return <PlayButton {...restProps}>{children}</PlayButton>
}

export default Header;