import React, {useContext, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {HeaderContainer} from "../containers/header";
import {FooterContainer} from "../containers/footer";
import {Form} from "../components";
import {FirebaseContext} from "../context/firebase";
import * as ROUTES from '../constants/routes'

const SignIn = () => {
    const history = useHistory();
    const {firebase} = useContext(FirebaseContext);
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = (password === '' || emailAddress === '');
    // console.log(isInvalid)

    const handleSignIn = (event) => {
        event.preventDefault();
        return firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then(() => {
                history.push(ROUTES.BROWSE);
            })
            .catch((error) => {
                // if(error.message === 'The email address is badly formatted.'){
                //     setError('Incorrect email try another')
                // }
                setEmailAddress('');
                setPassword('');
                setError(error.message);
            });
    };
    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleSignIn} method='POST'>
                        <Form.Input
                            placeholder='Email address'
                            value={emailAddress}
                            onChange={({target}) => setEmailAddress(target.value)}
                        />
                        <Form.Input
                            type='password'
                            placeholder='Password'
                            value={password}
                            autoComplete='off'
                            onChange={({target}) => setPassword(target.value)}
                        />
                        <Form.Submit disabled={isInvalid} type='submit'>Sign In</Form.Submit>
                        <Form.Text>
                            New to Netflix? <Form.Link to={ROUTES.SIGN_UP}>Sign up now.</Form.Link>
                        </Form.Text>
                        <Form.TextSmall>
                            This page is protected by reCAPTCHA to ensure
                            you're not a bot.
                            Learn more.
                        </Form.TextSmall>
                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer/>
        </>
    );
};
export default SignIn;