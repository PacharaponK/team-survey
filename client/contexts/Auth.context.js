import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import conf from '../conf/main';
import ax, { axData } from '../conf/ax';

const AuthContext = createContext(null);

const initialState = {
    isLoggedIn: false,
    user: null,
    isLoginPending: false,
    loginError: null,
};

const updateJwt = async (jwt) => {
    axData.jwt = jwt;
    if (jwt) {
        await AsyncStorage.setItem(conf.jwtSessionStorageKey, jwt);
    } else {
        await AsyncStorage.removeItem(conf.jwtSessionStorageKey);
    }
};

const ContextProvider = (props) => {
    const [state, setState] = useState(initialState);

    const updateState = (newState) => {
        setState((prevState) => ({ ...prevState, ...newState }));
    };

    const setLoginPending = (isLoginPending) => updateState({ isLoginPending });
    const setLoginSuccess = (isLoggedIn, user) => updateState({ isLoggedIn, user });
    const setLoginError = (loginError) => updateState({ loginError });

    const handleLoginResult = (error, result) => {
        setLoginPending(false);
        // console.log("result: ",result);

        if (result?.email) {
            if (result.access_token) {
                updateJwt(result.access_token);
            }
            setLoginSuccess(true, result.email);
        } else if (error) {
            setLoginError(error);
        }
    };

    useEffect(() => {
        const loadJwt = async () => {
            const persistedJwt = await AsyncStorage.getItem(conf.jwtSessionStorageKey);
            if (persistedJwt) {
                setLoginPending(true);
                loadPersistedJwt(handleLoginResult);
            }
        };

        loadJwt();
    }, []);

    const login = async (username, password) => {
        setLoginPending(true);
        setLoginSuccess(false, undefined);
        setLoginError(null);

        await fetchLogin(username, password, handleLoginResult);
    };

    const logout = () => {
        setLoginPending(false);
        updateJwt(null);
        setLoginSuccess(false, undefined);
        setLoginError(null);
    };

    return (
        <AuthContext.Provider
            value={{
                state,
                login,
                logout,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

const fetchLogin = async (username, password, callback) => {
    try {
        const response = await ax.post(conf.loginEndpoint, {
            email: username,
            password: password,
        });
        // console.log("response", response);
        

        if (response.data.access_token) {
            callback(null, response.data);
        } else {
            callback('Invalid username and password', undefined);
        }
    } catch (e) {
        callback('Fail to initiate login', undefined);
    }
};

const loadPersistedJwt = async (callback) => {
    try {
        const persistedJwt = await AsyncStorage.getItem(conf.jwtSessionStorageKey);
        if (persistedJwt) {
            axData.jwt = persistedJwt;
            const response = await ax.get(conf.jwtUserEndpoint);

            if (response.data.id > 0) {
                console.log(response);
                callback(null, { email: response.data.email });
            } else {
                callback(null);
            }
        }
    } catch (e) {
        callback('Fail to initiate auto login');
    }
};

export { AuthContext, ContextProvider };
