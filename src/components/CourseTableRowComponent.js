import React from "react";
import {updateCourse} from "../services/CourseService";
class CourseTableRowComponent extends React.Component {
    constructor(props) {
        super(props);
        this.save = React.createRef();
    }
    state = {
        selected: false,
        editing: false,
        course: this.props.course,
    }
    courseSelected = (e) =>
        {e.target === this.save.current ? this.setState({
            selected: false
        }) : this.setState({
            selected: true })
        }

    render() {
        return (
            <tr className={"row wbdv-row wbdv-course " + (this.state.selected? 'bg-primary text-light' : 'text-dark bg-none')}
                onClick={(event => this.courseSelected(event))}>
                <td className="col-8 col-sm-9 col-md-8 col-lg-5">
                <span className="d-flex">
                     <a onClick={this.props.showCourseEditor}>
                        <i className={"fas fa-file-alt mx-2 wbdv-row wbdv-icon " + (this.state.selected? 'text-light' : 'text-primary')}/>
                    </a>
                    {!this.state.editing &&
                    <a className={"wbdv-row wbdv-title text-truncate  " + (this.state.selected? 'text-light' : 'text-dark')} href="#"
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
                <td className="col d-none d-lg-table-cell wbdv-row wbdv-modified-date">
                    {new Date(this.state.course.date).toLocaleTimeString().replace(/:\d+ /, ' ')}</td>
                <td className="col-md-2 col-3">
                    {this.state.selected && !this.state.editing &&
                    <i className="btn d-inline fas fa-pencil-alt wbdv-edit text-light" onClick={() => this.setState({editing: true})}/>
                    }

                    {this.state.selected && !this.state.editing &&
                    <i className="btn d-inline wbdv-row wbdv-button wbdv-delete fa fa-trash text-light"
                       onClick={() => this.props.deleteCourse(this.state.course)}/>}

                    {this.state.selected && this.state.editing &&
                    <i className="btn fas fa-check text-light" ref={this.save}
                       onClick={(e) => {
                           this.setState({
                               course: {
                                   ...this.state.course,
                                    date: new Date()
                               }
                           })
                        updateCourse(this.state.course._id, this.state.course).then(status => {})
                        this.setState({
                            editing: false})
                        }
                    }/>}
                </td>
            </tr>)
    }
}

export default CourseTableRowComponent