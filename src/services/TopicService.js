import {MY_SERVER_API} from "../common/constants";

export const findTopicsForLesson = (lessonId) =>
    fetch(`${MY_SERVER_API}lessons/${lessonId}/topics`)
        .then(response => response.json())


export const deleteTopic = (topicId) =>
    fetch(`${MY_SERVER_API}topics/${topicId}`, {
        method: "DELETE"
    })
        .then(response => response.json())

export const updateTopic = async (topicId, topic) => {
    const response = await fetch(`${MY_SERVER_API}topics/${topicId}`, {
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
    const response = await fetch(`${MY_SERVER_API}lessons/${lessonId}/topics`, {
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