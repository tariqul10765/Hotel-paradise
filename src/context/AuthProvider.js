import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const authContext = createContext();

const AuthProvider = ({ children }) => {
    const auth = useFirebase();
    return (
        <div>
            <authContext.Provider value={auth}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;