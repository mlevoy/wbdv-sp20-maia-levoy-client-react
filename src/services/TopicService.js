import {NONCOURSE_API} from "../common/constants";

export const findTopicsForLesson = (lessonId) =>
    fetch(`${NONCOURSE_API}/lessons/${lessonId}/topics`)
        .then(response => response.json())


export const deleteTopic = (topicId) =>
    fetch(`${NONCOURSE_API}/topics/${topicId}`, {
        method: "DELETE"
    })
        .then(response => response.json())

export const updateTopic = async (topicId, topic) => {
    const response = await fetch(`${NONCOURSE_API}/topics/${topicId}`, {
        method: 'PUT',
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })
    return await response.json()
}

export const createTopic = async (lessonId, topic) =>
{
    const response = await fetch(`${NONCOURSE_API}/lessons/${lessonId}/topics`, {
        method: "POST",
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })
    return await response.json()
}

export default {
    deleteTopic,
    findTopicsForLesson,
    updateTopic,
    createTopic
}