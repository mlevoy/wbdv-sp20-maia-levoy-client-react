import {CREATE_WIDGET, DELETE_WIDGET, FIND_ALL_WIDGETS_FOR_TOPIC, UPDATE_WIDGET} from "../actions/widgetActions";

const widgetReducer = (state= {widgets: []}, action) => {
    switch (action.type) {
        case FIND_ALL_WIDGETS_FOR_TOPIC:
            return {
                widgets: action.widgets
            }
        case CREATE_WIDGET:
            action.widget.order = state.widgets.length
            return {
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }
        case DELETE_WIDGET:
            let widgets = state.widgets.filter(widget => widget.id !== action.widgetId)
            for (let i = 0; i < widgets.length; i++){
                if(widgets[i].order >= widgets.length){
                    widgets[i].order = widgets[i].order -1;
                }
            }
            return {
                widgets: widgets
            }
        case UPDATE_WIDGET:
            return{
                widgets: state.widgets.map(widget =>
                    widget.id === action.widget.id ? action.widget : widget
                )
            }
        case "SWITCH_WIDGET":

           function swap(list, i , j) {
               let tmp = list[i]
               list[i] = list[j]
               list[j] = tmp;

               tmp = list[i].order
               list[i].order = list[j].order;
               list[j].order = tmp;
           }
           function getSwapIndex(list, id) {
            for   (var index = 0; index < state.widgets.length; index++) {
                if (list[index].id === id){
                    return index;
                }
            }
           }

            let i = parseInt(getSwapIndex(state.widgets, action.widget.id));

            if(action.moveUp && i-1 !== -1){
               swap(state.widgets,i, i-1);
           }else if (!action.moveUp && i+1 !== state.widgets.length){
                swap(state.widgets,i, i+1);
            }
            return{
                widgets: state.widgets
            }
        default:
            return state
    }
}

export default widgetReducer