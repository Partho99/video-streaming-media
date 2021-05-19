import React, {useContext, useEffect, useState} from 'react';
import {FirebaseContext} from "../context/firebase";

const UseAuthListener = () => {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem('authUserStatus'))
    );
    const {firebase} = useContext(FirebaseContext);

    useEffect(() => {
        const listener = firebase.auth().onAuthStateChanged((authUser) => {
            if (authUser) {
                localStorage.setItem('authUserStatus', JSON.stringify(authUser));
                setUser(authUser);
            } else {
                localStorage.removeItem('authUserState');
                setUser(null)
            }
        })
        return () => listener();
    }, [])

    return {user};
};

export default UseAuthListener;