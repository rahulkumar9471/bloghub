import client from "./client";

export const createUser = async (userInfo) => {
    try{
        const { data } = await client.post('/user/signup', userInfo);
        return data;
    }catch(error){
        const { response } = error;
        if(response?.data) return response.data;

        return {error: error.message || error };
    }
}

export const verifyUserEmail = async (userInfo) => {
    try{
        const { data } = await client.post('/user/verifyemail', userInfo);
        return data;
    }catch(error){
        const { response } = error;
        if(response?.data) return response.data;

        return {error: error.message || error };
    }
}

export const resendOtp = async (userInfo) => {
    try{
        const { data } = await client.post('/user/resend-token', userInfo);
        return data;
    }catch(error){
        const { response } = error;
        if(response?.data) return response.data;

        return {error: error.message || error };
    }
}

export const signinUser = async (userInfo) => {
    try{
        const { data } = await client.post('/user/signin', userInfo);
        return data;
    }catch(error){
        const { response } = error;
        if(response?.data) return response.data;

        return {error: error.message || error };
    }
}