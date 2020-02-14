import React from "react";
import HeadingWidget from "./widgets/HeadingWidgetComponent";
import ParagraphWidget from "./widgets/ParagraphWidgetComponent";
import {connect} from "react-redux";
import {
    createWidget,
    deleteWidget,
    updateWidget,
    findWidgetsForTopic
} from "../../services/WidgetService";


class WidgetList extends React.Component {
    componentDidMount() {
        this.props.findWidgetsForTopic(this.props.topicId);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.topicId !== this.props.topicId) {
            this.props.findWidgetsForTopic(this.props.topicId);
        }
    }
    //TODO add logic for no widgets
    render(){
        return (
            <div>
                <div className="container-fluid d-flex justify-content-end mx-2">
                    <button type="button" className="btn btn-success">Save</button>
                    <div className="custom-control btn custom-switch mx-2">
                        <input type="checkbox" className="custom-control-input" id="toggle"/>
                        <label className="custom-control-label" htmlFor="toggle">Preview</label>
                    </div>
                </div>
                {
                    this.props.widgets && this.props.widgets.map(widget =>
                        <div key={widget.id}>
                            {widget.type === "HEADING"   && <HeadingWidget deleteWidget={this.props.removeWidget} widget={widget}/>}
                            {widget.type === "PARAGRAPH" && <ParagraphWidget widget={widget}/>}
                        </div>
                    )
                }
                <button className="btn nav-link bg-danger text-white mx-2 float-right wbdv-add-widget" href="#" onClick={() => this.props.createWidget(this.props.topicId)}>+
                </button>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    widgets: state.widgets.widgets,
    topics: state.topics.topics
})

//TODO make call to actions file functions instead
const dispatchToPropertyMapper = (dispatcher) => ({
    findWidgetsForTopic: (topicId) =>
        findWidgetsForTopic(topicId)
            .then(widgets => dispatcher({
                type: "FIND_ALL_WIDGETS_FOR_TOPIC",
                widgets: widgets
            })),
    updateWidget: (widgetId, newWidget) =>
        updateWidget(widgetId, newWidget)
            .then(status => dispatcher({
                type: "UPDATE_WIDGET",
                widget: newWidget
            })),
    removeWidget: (widgetId) =>
        deleteWidget(widgetId)
            .then(status => dispatcher({
                type: 'DELETE_WIDGET',
                widgetId: widgetId
            })),
    createWidget: (topicId) =>
        createWidget({
            type: "HEADING",
            size: 1,
            id: (new Date()).getTime() + "",
            topicId: topicId
        })
            .then(actualWidget => dispatcher({
                type: "CREATE_WIDGET",
                widget: actualWidget
            }))
})

export default connect (stateToPropertyMapper, dispatchToPropertyMapper)(WidgetList)