import {API_URL, NONCOURSE_API} from "../common/constants";

export const findModulesForCourse = (courseId) =>
    fetch(`${API_URL}/${courseId}/modules`)
        .then(response => response.json())


export const deleteModule = (moduleId) =>
    fetch(`${NONCOURSE_API}/modules/${moduleId}`, {
        method: "DELETE"
    })
        .then(response => response.json())

export const updateModule = async (moduleId, module) => {
    const response = await fetch(`${NONCOURSE_API}/modules/${moduleId}`, {
        method: 'PUT',
        body: JSON.stringify(module),
        headers: {
            'content-type': 'application/json'
        }
    })
    return await response.json()
}

export const createModule = async (courseId, module) =>
{
    const response = await fetch(`${API_URL}/${courseId}/modules`, {
        method: "POST",
        body: JSON.stringify(module),
        headers: {
            'content-type': 'application/json'
        }
    })
    return await response.json()
}

export default {
    deleteModule,
    findModulesForCourse,
    updateModule,
    createModule
}
