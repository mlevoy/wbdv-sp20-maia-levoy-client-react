import React from "react";
import HeadingWidget from "../../components/courseEditor/widgets/HeadingWidgetComponent";
import ParagraphWidget from "../../components/courseEditor/widgets/ParagraphWidgetComponent";
import {connect} from "react-redux";
import {
    createWidget,
    deleteWidget,
    updateWidget,
    findWidgetsForTopic
} from "../../services/WidgetService";
import actions from "../../actions/widgetActions";


class WidgetList extends React.Component {
    componentDidMount() {
        this.props.findWidgetsForTopic(this.props.topicId);

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.topicId !== this.props.topicId) {
            this.props.findWidgetsForTopic(this.props.topicId);
            this.setState({
                preview: false
            })
        }
    }

    state = {
        widgets: this.props.widgets,
        preview: false
    }
    render(){
        return (
            <div>
                {(this.props.topicId && this.props.topics.length && this.props.widgets.length !==0) &&
                <div className="container-fluid d-flex justify-content-end my-2 mx-2">
                    <button type="button" className="btn btn-success" onClick={() => this.props.updateAllWidgets(this.props.widgets)}>
                        Save
                    </button>
                    <div className="custom-control btn custom-switch mx-2">
                        <input type="checkbox" className="custom-control-input" id="toggle"
                               onChange={()=>this.setState({
                                   preview: !this.state.preview
                               })} checked={this.state.preview}/>
                        <label className="custom-control-label" htmlFor="toggle">Preview</label>
                    </div>
                </div>}
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
                                widget={widget}
                                preview = {this.state.preview}/>}
                            {widget.type === "PARAGRAPH" && <ParagraphWidget
                                switchPosition={async (widget, moveUp) => {
                                    await this.props.switchPosition(widget, moveUp)
                                    this.setState( {
                                        widgets: this.props.widgets
                                    })
                                    }}
                                updateWidgetUI={this.props.updateWidgetUI}
                                deleteWidget={(id) => {this.props.removeWidget(id)
                                this.props.updateAllWidgets(this.props.widgets)}}
                                widget={widget}
                                preview = {this.state.preview}/>}
                        </div>
                    )

                }
                {this.props.topicId && this.props.topics.length && <button className="btn nav-link bg-danger text-white mx-2 float-right wbdv-add-widget" href="#"
                        onClick={() => this.props.createWidget(this.props.topicId, this.props.widgets.length)}>+
                </button>}
                {this.props.topicId && this.props.topics.length && !this.props.widgets.length && <h5 className={"d-flex float-right justify-content-center"}>Add Widgets</h5>}

            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    widgets: state.widgets.widgets,
    topics: state.topics.topics
})

const dispatchToPropertyMapper = (dispatcher) => ({
    findWidgetsForTopic: (topicId) =>
        findWidgetsForTopic(topicId)
            .then(widgets => dispatcher(actions.findWidgets(widgets))),
    updateWidgetUI: (widget) =>
                dispatcher(actions.updateWidget(widget)),
    updateWidget: (widgetId, newWidget) =>
        updateWidget(widgetId, newWidget)
            .then(status => dispatcher(actions.updateWidget())),
    updateAllWidgets: async (widgets) => {
        for (let widget in widgets) {
            const newWidget = await updateWidget(widgets[widget].id, widgets[widget])
            await dispatcher({
                type: "UPDATE_WIDGETS",
                widget: widgets[widget]
            })
        }},
    switchPosition: (widget, moveUp) =>
        dispatcher(actions.switchWidget(widget, moveUp)),

    removeWidget: (widgetId) =>
        deleteWidget(widgetId)
            .then(status => dispatcher(actions.deleteWidget(widgetId)
            )),
    createWidget: (topicId, order) =>
        createWidget({
            type: "HEADING",
            size: 1,
            id: (new Date()).getTime() + "",
            order: order,
            topicId: topicId
        }).then(actualWidget => dispatcher(actions.createWidget(actualWidget)))
})

export default connect (stateToPropertyMapper, dispatchToPropertyMapper)(WidgetList)