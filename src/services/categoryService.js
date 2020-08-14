import axios from '../config/axiosMeet'

export const getCategories = async () => {
    return await axios.get('/death-meet/category');
}