import client from "./client";

export const createUser = async (userInfo) => {
    try {
        const { data } = await client.post('/user/signup', userInfo);
        return data;
    } catch (error) {
        const { response } = error;
        if (response?.data) return response.data;

        return { error: error.message || error };
    }
}

export const verifyUserEmail = async (userInfo) => {
    try {
        const { data } = await client.post('/user/verify-email', userInfo);
        return data;
    } catch (error) {
        const { response } = error;
        if (response?.data) return response.data;

        return { error: error.message || error };
    }
}

export const resendOtp = async (userInfo) => {
    try {
        const { data } = await client.post('/user/resend-email-verification-token', userInfo);
        return data;
    } catch (error) {
        const { response } = error;
        if (response?.data) return response.data;

        return { error: error.message || error };
    }
}

export const signInUser = async (userInfo) => {
    try {
        const { data } = await client.post('/user/signin', userInfo);
        return data;
    } catch (error) {
        const { response } = error;
        if (response?.data) return response.data;

        return { error: error.message || error };
    }
}

export const forgotPassord = async (email) => {
    try {
        const { data } = await client.post('/user/forgot-password', email);
        return data;
    } catch (error) {
        const { response } = error;
        if (response?.data) return response.data;

        return { error: error.message || error };
    }
}

export const verifyPasswordResetToken = async (token, userId) => {
    try {
        const { data } = await client.post('/user/verify-password-reset-token', { token, userId });
        return data;
    } catch (error) {
        const { response } = error;
        if (response?.data) return response.data;

        return { error: error.message || error };
    }
}
export const resetPassword = async (passwordInfo) => {
    try {
        const { data } = await client.post('/user/reset-password', passwordInfo);
        return data;
    } catch (error) {
        const { response } = error;
        if (response?.data) return response.data;

        return { error: error.message || error };
    }
}




export const getIsAuth = async (token) => {
    try {
        const { data } = await client.get('/user/isAuth', {
            headers: {
                Authorization: 'Bearer ' + token,
                accept: 'application/json'
            }
        });
        return data;
    } catch (error) {
        const { response } = error;
        if (response?.data) return response.data;

        return { error: error.message || error };
    }
}