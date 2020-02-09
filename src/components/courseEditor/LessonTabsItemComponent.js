import React from "react";
import {updateCourse} from "../../services/CourseService";

class LessonTabsItem extends React.Component {
    constructor(props) {
        super(props);
        this.save = React.createRef();
    }
    state = {
        selected: false,
        lesson: this.props.lesson,
    }
    lessonSelected = (e) =>
    {e.target === this.save.current ? this.setState({
        selected: false
    }) : this.setState({
        selected: true })
    }
    render() {
        return (
            <li className = {"nav-item"}>
                <a className={"nav-link text-white border wbdv-page-tab " + (this.state.selected ? 'bg-primary' : 'bg-secondary')} href={"#"}>
                <span className="wbdv-module-item-title">{this.props.lesson.title}</span>
                {!this.state.selected &&
                <i className="btn fas fa-pencil-alt wbdv-edit text-white" onClick={(event => this.lessonSelected(event))}/>}
                {this.state.selected &&
                <span>
                 <i className="btn fas fa-check text-white" ref={this.save}
                    onClick={(e) => {
                        this.setState({
                            lesson: {
                                ...this.state.lesson,
                            }
                        })
                        // updateLesson(this.state.lesson._id, this.state.lesson).then(status => {})
                        this.setState({
                            selected: false})
                    }
                    }
                 />
            <i className="btn d-inline wbdv-row wbdv-button wbdv-delete fas fa fa-times text-white"
               onClick={() => this.props.deleteCourse(this.state.course)}/>
            </span>}
                </a>
            </li>
        )
    }
}
export default LessonTabsItem