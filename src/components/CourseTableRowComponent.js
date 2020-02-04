import React from "react";
import {updateCourse} from "../services/CourseService";
class CourseTableRowComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        selected: false,
        editing: false,
        course: this.props.course
    }

    courseSelected = () =>
        this.setState({
            selected: true
        })

     courseUnselected = () =>
        this.setState({
            selected: false
        })


    render() {
        return (
            <tr className="row wbdv-row wbdv-course" onClick={this.courseSelected}>
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
                <td className="col d-none d-md-table-cell wbdv-row wbdv-owner">me</td>
                <td className="col d-none d-lg-table-cell wbdv-row wbdv-modified-date">6:45 PM</td>
                <td className="col-2">
                    {this.state.selected && !this.state.editing &&
                    <i className="btn fas fa-pencil-alt wbdv-edit" onClick={() => this.setState({editing: true})}/>
                    }
                    {this.state.selected && !this.state.editing &&
                    <i className="btn wbdv-row wbdv-button wbdv-delete fa fa-trash" onClick={() => this.props.deleteCourse(this.state.course)}/>}
                    {this.state.selected && this.state.editing &&
                    <i className="btn fas fa-check" onClick={(e) => {
                        updateCourse(this.state.course._id, this.state.course).then(status => {})
                        this.setState({
                            editing: false,
                            // selected: false NOT WORKING
                            })
                        }
                    }/>}
                </td>
            </tr>)
    }
}

export default CourseTableRowComponent