import{CREATE_LESSON, DELETE_LESSON, UPDATE_LESSON, FIND_LESSONS_FOR_MODULE} from "../actions/lessonActions";

const lessonReducer = (state = {lessons: []}, action) => {
    switch (action.type) {
        case CREATE_LESSON:
            return {
                lessons: [
                    ...state.lessons,
                    action.newLesson
                ]
            }
        case DELETE_LESSON:
            return {
                lessons: state.lessons.filter(
                    lesson => lesson._id !== action.lessonId)
            }
        case UPDATE_LESSON:
            return {
                lessons: state.lessons.map(lesson =>
                    lesson._id === action.lessonId ? action.newLesson : lesson
                )
            }
        case FIND_LESSONS_FOR_MODULE:
            return {
                lessons: action.lessons
            }
        default:
            return state
    }
}

export default lessonReducer