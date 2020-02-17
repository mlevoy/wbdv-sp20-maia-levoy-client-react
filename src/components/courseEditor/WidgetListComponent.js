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

    state = {
        widgets: this.props.widgets
    }
    render(){
        return (
            <div>
                <div className="container-fluid d-flex justify-content-end my-2 mx-2">
                    <button type="button" className="btn btn-success" onClick={() => this.props.updateAllWidgets(this.props.widgets)}>
                        Save
                    </button>
                    <div className="custom-control btn custom-switch mx-2">
                        <input type="checkbox" className="custom-control-input" id="toggle"/>
                        <label className="custom-control-label" htmlFor="toggle">Preview</label>
                    </div>
                </div>
                {this.props.widgets &&
                this.props.widgets.map(widget =>
                        <div key={widget.id}>
                            {widget.type === "HEADING" &&
                            <HeadingWidget
                                switchPosition={async (widget, moveUp) => {
                                    await this.props.switchPosition(widget, moveUp)
                                    this.setState({
                                        widgets: this.props.widgets
                                    })
                                }}
                                updateWidgetUI={ this.props.updateWidgetUI}
                                deleteWidget={(id) => {this.props.removeWidget(id)
                                    this.props.updateAllWidgets(this.props.widgets)}}
                                widget={widget}/>}
                            {widget.type === "PARAGRAPH" && <ParagraphWidget
                                switchPosition={async (widget, moveUp) => {
                                    await this.props.switchPosition(widget, moveUp)
                                    this.setState(prevState => {
                                        widgets: this.props.widgets
                                    })
                                    }}
                                updateWidgetUI={this.props.updateWidgetUI}
                                deleteWidget={(id) => {this.props.removeWidget(id)
                                this.props.updateAllWidgets(this.props.widgets)}}
                                widget={widget}/>}
                        </div>
                    )

                }
                <button className="btn nav-link bg-danger text-white mx-2 float-right wbdv-add-widget" href="#"
                        onClick={() => this.props.createWidget(this.props.topicId, this.props.widgets.length)}>+
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
    updateWidgetUI: (widget) =>
                dispatcher({
                type: "UPDATE_WIDGET",
                widget: widget
            }),
    switchPosition: (widget, moveUp) =>
        dispatcher({
            type: "SWITCH_WIDGET",
            widget: widget,
            moveUp: moveUp
        }),
    updateWidget: (widgetId, newWidget) =>
        updateWidget(widgetId, newWidget)
            .then(status => dispatcher({
                type: "UPDATE_WIDGET",
                widget: newWidget
            })),
    updateAllWidgets: async (widgets) => {
        for (let widget in widgets) {
           const newWidget = await updateWidget(widgets[widget].id, widgets[widget])
           await dispatcher({
                type: "UPDATE_WIDGETS",
                widget: widgets[widget]
            })
        }},
    removeWidget: (widgetId) =>
        deleteWidget(widgetId)
            .then(status => dispatcher({
                type: 'DELETE_WIDGET',
                widgetId: widgetId
            })),
    createWidget: (topicId, order) =>
        createWidget({
            type: "HEADING",
            size: 1,
            id: (new Date()).getTime() + "",
            order: order,
            topicId: topicId
        })
            .then(actualWidget => dispatcher({
                type: "CREATE_WIDGET",
                widget: actualWidget
            }))
})

export default connect (stateToPropertyMapper, dispatchToPropertyMapper)(WidgetList)