import React from "react";
import {updateCourse} from "../../services/CourseService";

class TopicPillsItem extends React.Component {
    constructor(props) {
        super(props);
        this.save = React.createRef();
    }
    state = {
        selected: false,
        topic: this.props.topic,
    }
    topicSelected = (e) =>
    {e.target === this.save.current ? this.setState({
        selected: false
    }) : this.setState({
        selected: true })
    }
    render() {
        return (
            <li className="nav-item wbdv-topic-pill my-1 my-md-0">
                <a className={"nav-link mx-2 text-white border wbdv-page-tab " + (this.state.selected ? 'bg-primary' : 'bg-secondary')} href={"#"}>
                    <span className="wbdv-module-item-title">{this.props.lesson.title}</span>
                    {!this.state.selected &&
                    <i className="btn fas fa-pencil-alt wbdv-edit text-white" onClick={(event => this.topicSelected(event))}/>}
                    {this.state.selected &&
                    <span>
                 <i className="btn fas fa-check text-white" ref={this.save}
                    onClick={(e) => {
                        this.setState({
                            module: {
                                ...this.state.topic,
                            }
                        })
                        // updateTopic(this.state.topic._id, this.state.topic).then(status => {})
                        this.setState({
                            selected: false})
                    }
                    }
                 />
            <i className="btn d-inline wbdv-row wbdv-button wbdv-delete fas fa fa-times text-white"
               // onClick={() => this.props.deleteTopic(this.state.topic)}
                        />
            </span>}
                </a>
            </li>
        )
    }
}
export default TopicPillsItem