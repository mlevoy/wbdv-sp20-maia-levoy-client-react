import {WIDGET_API} from "../common/constants.js";

export const findWidgetsForTopic = (topicId) =>
    fetch(`http://ancient-fortress-94710.herokuapp.com/topics/${topicId}/widgets/`)
        .then(response => response.json())

export const updateWidget = (wid, widget) =>
    fetch(`${WIDGET_API}${wid}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            'content-type': "application/json"
        }
    }).then(response => response.json())

export const deleteWidget = (widgetId) =>
    fetch(`${WIDGET_API}${widgetId}`, {
        method: "DELETE"
    }).then(response => response.json())

export const createWidget = (widget) =>
    fetch(`${WIDGET_API}`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': "application/json"
        }
    })
        .then(response => response.json())
