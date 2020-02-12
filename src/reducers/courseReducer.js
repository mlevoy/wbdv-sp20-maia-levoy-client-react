

const courseReducer = (state = {courses: []}, action) => {
    switch (action.type) {
        case "FIND_ALL_COURSES":
            return {
                courses: action.courses
            }
        case "FIND_COURSE_BY_ID":
            return {
                course: state.courses.filter(course =>
                    course._id === action.courseId)
            }
        default:
            return state
    }
}

export default courseReducer