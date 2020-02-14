import {CREATE_WIDGET, DELETE_WIDGET, FIND_ALL_WIDGETS_FOR_TOPIC, UPDATE_WIDGET} from "../actions/widgetActions";

const widgetReducer = (state= {widgets: []}, action) => {
    switch (action.type) {
        case FIND_ALL_WIDGETS_FOR_TOPIC:
            return {
                widgets: action.widgets
            }
        case CREATE_WIDGET:
            return {
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }
        case DELETE_WIDGET:
            return {
                widgets: state.widgets.filter(widget => widget.id !== action.widgetId)
            }
        case UPDATE_WIDGET:
            return{
                widgets: state.widgets.map(widget =>
                    widget._id === action.widgetId ? action.newWidget : widget
                )
            }
        default:
            return state
    }
}

export default widgetReducer