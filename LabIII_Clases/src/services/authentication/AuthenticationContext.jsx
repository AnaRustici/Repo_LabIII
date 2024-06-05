import { useState, createContext } from "react";
import PropTypes from 'prop-types'

export const AuthenticationContext = createContext({})

const userValueString = localStorage.getItem("user");
const userValue = userValueString ? JSON.parse(userValueString) : null;

export const AuthenticationContextProvider = ({ children }) => {
    const [user, setUser] = useState(userValue)

    const handleLogin = (username) => {
        localStorage.setItem("user", JSON.stringify({ username }));
        setUser({ username });
    };

    const tryHandleLogin = (username, role, cart=null) => {
        localStorage.setItem("user", JSON.stringify({ username, role, cart }));
        setUser({ username, role, cart });
    }

    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
    };

    return (
        <AuthenticationContext.Provider value={{ user, handleLogin, handleLogout, tryHandleLogin }}>
            {children}
        </AuthenticationContext.Provider>
    )
}
/*
AuthenticationContextProvider.propTypes = {
    children: PropTypes.object,
}; */