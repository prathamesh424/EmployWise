/* eslint-disable react/prop-types */
import { useState, createContext, useEffect } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = sessionStorage.getItem('accessToken');
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    const login = (token) => {
        sessionStorage.setItem('accessToken', token);
        setIsAuthenticated(true);
    };

    const logout = () => {
        sessionStorage.removeItem('accessToken');
        setIsAuthenticated(false);
    };

    return (
        <DataContext.Provider value={{
            isAuthenticated,
            login,
            logout
        }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;