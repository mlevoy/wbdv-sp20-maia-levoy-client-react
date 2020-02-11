export const FIND_LESSONS_FOR_MODULE = "FIND_LESSONS_FOR_MODULE"
export const findLessons = (lessons) => ({
    type: FIND_LESSONS_FOR_MODULE,
    lessons: lessons
})

export const DELETE_LESSON = "DELETE_LESSON"
export const deleteLesson = (lessonId) => ({
    type: DELETE_LESSON,
    lessonId: lessonId
})

export const CREATE_LESSON = "CREATE_LESSON"
export const createLesson = (lesson) =>
    ({
        type: CREATE_LESSON,
        newLesson: lesson
    })


export const UPDATE_LESSON = "UPDATE_LESSON"
export const updateLesson = (lesson) => ({
    type: UPDATE_LESSON,
    newLesson: lesson,
    lessonId: lesson._id
})