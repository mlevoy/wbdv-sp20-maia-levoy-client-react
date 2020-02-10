import {CREATE_MODULE, DELETE_MODULE, FIND_MODULES_FOR_COURSE, UPDATE_MODULE} from "../actions/moduleActions";



const moduleReducer = (state = {modules: []}, action) => {
    switch(action.type) {
        case FIND_MODULES_FOR_COURSE:
            return {
                modules: action.modules
            }
        case CREATE_MODULE:
            console.log(action)
            return {
                modules: [
                    ...state.modules,
                    action.module
                ]
            }
        case DELETE_MODULE:
            return {
                modules: state.modules.filter(module => module._id !== action.moduleId)
            }
        case UPDATE_MODULE:
            return{
                modules: state.modules.map(module =>
                    module._id === action.moduleId ? action.newModule : module
                )

            }
        default:
            return state
    }
}

export default moduleReducer