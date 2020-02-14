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
        newWidget: widget
    })


export const UPDATE_WIDGET = "UPDATE_WIDGET"
export const updateWidget = (widget) => ({
    type: UPDATE_WIDGET,
    newWidget: widget,
    widgetId: widget._id
})