import axios from '../config/Axios'

export const teacherBot = async (question) => {
    return await axios.post('/death-teachers/bot', question)
}
export const getTopicClass = async (question) => {
    return await axios.post('/death-teachers/wiqipedia', question)
}
export const getScrappingQuestion = async (question) => {
    return await axios.post('/death-teachers/food', question)
}

export const uploadVideo = async (blobVideoRequest) => {
    return await axios.post('/death-teachers/event', blobVideoRequest)
}