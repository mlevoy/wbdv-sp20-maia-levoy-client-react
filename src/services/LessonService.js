import {NONCOURSE_API} from "../common/constants";

export const findLessonsForModule = (moduleId) =>
    fetch(`${NONCOURSE_API}/modules/${moduleId}/lessons`)
        .then(response => response.json())


export const deleteLesson = (lessonId) =>
    fetch(`${NONCOURSE_API}/lessons/${lessonId}`, {
        method: "DELETE"
    })
        .then(response => response.json())

export const updateLesson = async (lessonId, lesson) => {
    const response = await fetch(`${NONCOURSE_API}/lessons/${lessonId}`, {
        method: 'PUT',
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    })
    return await response.json()
}

export const createLesson = async (moduleId, lesson) =>
{
    const response = await fetch(`${NONCOURSE_API}/modules/${moduleId}/lessons`, {
        method: "POST",
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    })
    return await response.json()
}

export default {
    deleteLesson,
    findLessonsForModule,
    updateLesson,
    createLesson
}