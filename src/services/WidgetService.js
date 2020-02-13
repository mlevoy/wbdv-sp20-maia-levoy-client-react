import {WIDGET_API} from "../common/constants";

export const findWidgetsForTopic = (topicd) =>
    fetch(`http://localhost:8080/topics/${topicd}/widgets/`)
        .then(response => response.json())

export const updateWidget = (wid, widget) =>
    fetch(`${WIDGET_API}/${wid}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            'content-type': "application/json"
        }
    }).then(response => response.json())

export const findAllWidgets = () =>
    fetch(`${WIDGET_API}`)
        .then(response => response.json())

export const deleteWidget = (widgetId) =>
    fetch(`${WIDGET_API}/${widgetId}`, {
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