import React from "react";
import {updateCourse} from "../services/CourseService";
import {Link} from "react-router-dom";
class CourseCardComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
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

            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4">
                <div className="card">
                <i className="card-img-top text-center fas fa-file-alt text-primary fa-10x wbdv-icon" onClick={this.props.showCourseEditor}/>
                <div className="card-body text-center">
                {!this.state.editing && <Link className="d-block text-truncate text-dark wbdv-title" to={`/course-editor/${this.state.course._id}`}
                       onClick={this.props.showCourseEditor}>{this.state.course.title}</Link>}
                       {this.state.editing && <input onChange={(e) => this.setState({
                                course: {
                                    ...this.state.course,
                                    title: e.target.value
                                }
                            })}
                            value={this.state.course.title}/>
                    }
                <div className="card-text wbdv-owner">Owned by me</div>
                <div className="card-text wbdv-modified-date">
                    Modified {new Date(this.state.course.date).toLocaleTimeString().replace(/:\d+ /, ' ')}</div>
                    {!this.state.editing &&
                    <i className="btn fas fa-pencil-alt wbdv-edit" onClick={() => this.setState({editing: true})}/>
                    }
                    {!this.state.editing &&
                    <i className="btn wbdv-row wbdv-button wbdv-delete fa fa-trash" onClick={() => this.props.deleteCourse(this.state.course)}/>}
                    {this.state.editing &&
                    <i className="btn fas fa-check" onClick={(e) => {
                        this.setState({
                            course: {
                                ...this.state.course,
                                date: new Date()
                            }
                        })
                        updateCourse(this.state.course._id, this.state.course).then(status => {})
                        this.setState({
                            editing: false,
                        })
                    }
                    }/>}
                </div>
                </div>
            </div>)
    }
}

export default CourseCardComponent