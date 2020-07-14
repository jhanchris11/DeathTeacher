import axios from '../config/Axios'

export const teacherBot = async (question) => {
    await axios.post('/death-teachers/bot', question)
}
