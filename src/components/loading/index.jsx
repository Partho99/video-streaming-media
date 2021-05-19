import React from 'react';
import {
    LockBody,
    ReleaseBody,
    Spinner,
    Picture
} from "./styles/LoadingStyle";

const Loading = ({src, ...restProps}) => {
    return (
        <Spinner {...restProps}>
            <LockBody/>
            <Picture src={`/images/users/${src}.png`}/>
        </Spinner>
    );
};

Loading.ReleaseBody = () => {
    return <ReleaseBody/>;
}

export default Loading;