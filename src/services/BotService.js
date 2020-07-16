import axios from '../config/Axios'

export const teacherBot = async (question) => {
    return await axios.post('/death-teachers/bot', question)
}
