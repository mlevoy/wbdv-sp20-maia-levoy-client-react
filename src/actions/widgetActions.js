export const FIND_ALL_WIDGETS_FOR_TOPIC = "FIND_ALL_WIDGETS_FOR_TOPIC"
export const findWidgets = (widgets) => ({
    type: FIND_ALL_WIDGETS_FOR_TOPIC,
    widgets: widgets
})

export const DELETE_WIDGET = "DELETE_WIDGET"
export const deleteWidget = (widgetId) => ({
    type: DELETE_WIDGET,
    widgetId: widgetId
})

export const CREATE_WIDGET = "CREATE_WIDGET"
export const createWidget = (widget) =>
    ({
        type: CREATE_WIDGET,
        widget: widget
    })


export const UPDATE_WIDGET = "UPDATE_WIDGET"
export const updateWidget = (widget) => ({
    type: UPDATE_WIDGET,
    widget: widget,
})

export const SWITCH_WIDGET = "SWITCH_WIDGET"
const switchWidget = (widget, moveUp) => ({
    type: SWITCH_WIDGET,
    widget: widget,
    moveUp: moveUp
})

export default {
    updateWidget,
    createWidget,
    deleteWidget,
    findWidgets,
    switchWidget
}