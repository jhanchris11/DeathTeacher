import axiosClient from '../config/axios';

export const insertUser = async (user) => {
    let response =  await axiosClient.post('/users',user);
    return response;
}

export const verifyUser = async (user) => {
    let response =  await axiosClient.put('/users',user);
    return response;
}