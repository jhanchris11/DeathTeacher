import axios from '../config/axiosMeet'

export const getProfessorByCategoryId = async (categoryId) => {
    return await axios.get(`/death-meet/professor/${categoryId}`)
}