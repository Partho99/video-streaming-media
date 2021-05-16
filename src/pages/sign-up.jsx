import React, {useContext, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {HeaderContainer} from "../containers/header";
import {FooterContainer} from "../containers/footer";
import {Form} from "../components";
import {FirebaseContext} from "../context/firebase";
import * as ROUTES from '../constants/routes'


const SignUp = () => {
    const history = useHistory();

    const {firebase} = useContext(FirebaseContext);

    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = (firstName === '' || password === '' || emailAddress === '');

    const handleSignUp = (event) => {
        event.preventDefault()

        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then((result) =>
                result.user.updateProfile({
                    displayName: firstName,
                    photoURL: Math.floor(Math.random() * 5) + 1,
                }).then(() => {
                    history.push(ROUTES.BROWSE);
                })
            )
            .catch(error => {
                setEmailAddress('');
                setFirstName('');
                setPassword('');
                setError(error.message);
            })
    }
    return (
        <>
            <HeaderContainer>
                <Form t='complex'>
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleSignUp} method='POST'>
                        <Form.Input
                            placeholder='First Name'
                            value={firstName}
                            onChange={({target}) => setFirstName(target.value)}
                        />
                        <Form.Input
                            placeholder='Email address'
                            value={emailAddress}
                            onChange={({target}) => setEmailAddress(target.value)}
                        />
                        <Form.Input
                            placeholder='Password'
                            value={password}
                            type='password'
                            onChange={({target}) => setPassword(target.value)}
                        />

                        <Form.Submit disabled={isInvalid} type='submit'>
                            Sign Up
                        </Form.Submit>
                        <Form.Text>
                            Already a user? <Form.Link to={ROUTES.SIGN_IN}>Sign In</Form.Link>
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

export default SignUp;