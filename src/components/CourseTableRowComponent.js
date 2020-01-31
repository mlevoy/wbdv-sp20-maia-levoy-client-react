import React from "react";
import {updateCourse} from "../services/CourseService";

class CourseTableRowComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        editing: false,
        course: this.props.course
    }

    render() {
        return (
            <tr className="row wbdv-row wbdv-course">
                <td className="col-10 col-md-8 col-lg-6">
                <span className="d-flex">
                     <a onClick={this.props.showCourseEditor}>
                        <i className="fas fa-file-alt text-primary mx-2 wbdv-row wbdv-icon"></i>
                    </a>
                    {!this.state.editing &&
                    <a className="text-dark wbdv-row wbdv-title text-truncate" href="#"
                       onClick={this.props.showCourseEditor}>{this.state.course.title}</a>
                    }
                    {
                        this.state.editing &&
                        <input
                            onChange={(e) => this.setState({
                                course: {
                                    ...this.state.course,
                                    title: e.target.value
                                }
                            })}
                            value={this.state.course.title}/>
                    }
                </span>
                </td>
                {/*TODO owner and modified date dynamic*/}
                <td className="col d-none d-md-table-cell wbdv-row wbdv-owner">me</td>
                <td className="col d-none d-lg-table-cell wbdv-row wbdv-modified-date">6:45 PM</td>
                <td className="col-2">
                    <button onClick={() => this.props.deleteCourse(this.state.course)} type="button"
                            className="btn pt-0 wbdv-row wbdv-button wbdv-delete"><i className="fas fa-times"></i>
                    </button>
                    <button onClick={() => this.setState({editing: true})}>Edit</button>
                    <button onClick={(e) => {
                        updateCourse(this.state.course._id, this.state.course).then(status => {})
                        this.setState({
                            editing: false
                        })
                    }}>Save</button>
                </td>
            </tr>)
    }
}

export default CourseTableRowComponent