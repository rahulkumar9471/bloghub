import React, { createContext, useEffect, useState } from 'react'
import { getIsAuth, signInUser } from '../api/auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

const defaultAuthInfo = {
    profile: null,
    isLoggedIn: false,
    isPending: false,
    error: ''
}

const AuthProvider = ({ children }) => {

    const [authInfo, setAuthInfo] = useState({ ...defaultAuthInfo });

    const navigate = useNavigate();

    const handleLogin = async (email, password) => {
        try {
            setAuthInfo({ ...authInfo, isPending: true });
            const { error, user } = await signInUser({ email, password });

            if (error) return setAuthInfo({ ...authInfo, isPending: false, error });

            navigate('/', {replace: true})

            setAuthInfo({
                profile: { ...user },
                isLoggedIn: true,
                isPending: false,
                error: ''
            })

            localStorage.setItem('auth-token', user.token);
        } catch (error) {
            console.error("An error occurred while handle Login Auth:", error);
            toast.error("An unexpected error occurred. Please try again later.");
        }

    }

    const isAuth = async () => {
        try {
            const token = localStorage.getItem('auth-token');
            if (!token) return;
            setAuthInfo({ ...authInfo, isPending: true });
            const { error, user } = await getIsAuth(token);

            if (error) return setAuthInfo({ ...authInfo, isPending: false, error });

            setAuthInfo({
                profile: { ...user },
                isLoggedIn: true,
                isPending: false,
                error: ''
            })
        } catch (error) {
            console.error("An error occurred while Check isAuth or not:", error);
            toast.error("An unexpected error occurred. Please try again later.");
        }
    }

    const handleLogout = () => {

        localStorage.removeItem('auth-token');
        setAuthInfo({ ...defaultAuthInfo });
    }

    useEffect(() => {
        isAuth();
    }, []);

    return (
        <AuthContext.Provider value={{ authInfo, handleLogin, isAuth, handleLogout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider