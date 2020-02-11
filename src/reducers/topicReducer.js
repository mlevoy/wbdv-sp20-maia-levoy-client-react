import{CREATE_TOPIC, DELETE_TOPIC, UPDATE_TOPIC, FIND_TOPICS_FOR_LESSON} from "../actions/topicActions";

const topicReducer = (state = {topics: []}, action) => {
    switch (action.type) {
        case CREATE_TOPIC:
            return {
                topics: [
                    ...state.topics,
                    action.newTopic
                ]
            }
            break;
        case DELETE_TOPIC:
            return {
                topics: state.topics.filter(
                    topic => topic._id !== action.topicId)
            }
            break;
        case UPDATE_TOPIC:
            return {
                topics: state.topics.map(topic =>
                    topic._id === action.topicId ? action.newTopic : topic
                )
            }
            break;
        case FIND_TOPICS_FOR_LESSON:
            return {
                topics: action.topics
            }
        default:
            return state
    }
}

export default topicReducer