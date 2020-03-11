import React from "react";
import ModuleList from "./ModuleListContainer";
import TopicPills from "./TopicPillsContainer";
import WidgetList from "./WidgetListContainer";
import {connect} from "react-redux";
import LessonTabs from "./LessonTabsContainer";
import {findAllCourses, findCourseById} from "../../services/CourseService"


class CourseEditorContainer extends React.Component {
    componentDidMount() {
        this.props.findCourses().then((e)=>this.props.findEditingCourse(this.props.courseId))
           .then((t)=>this.props.course)
    }
    render() {
    return (
        <div className="container-fluid">
            <div className="row bg-light">
                <div className="col-sm-4 py-2">
                    <button className={"btn"} onClick={() => this.props.history.push("/")}><i className="fas fa-times"/>
                    </button>
                    <h6 className="text-dark d-inline wbdv-course-title">{this.props.course ? this.props.course[0].title : ""}</h6>
                </div>
                <div className="col-sm-8">
                    <LessonTabs lessonId={this.props.lessonId}
                                courseId={this.props.courseId}
                                history={this.props.history}
                                moduleId={this.props.moduleId}/>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4 bg-light">
                    <ModuleList courseId={this.props.courseId}
                                history={this.props.history}
                                moduleId={this.props.moduleId}
                    />
                </div>
                <div className="col-sm-8 bg-white">
                    <TopicPills lessonId={this.props.lessonId}
                                courseId={this.props.courseId}
                                topicId={this.props.topicId}
                                history={this.props.history}
                                moduleId={this.props.moduleId}/>
                    <WidgetList topicId={this.props.topicId}
                                widgetId={this.props.widgetId}/>
                </div>
            </div>
        </div>)
    }
}
const stateToPropertyMapper = (state) => {
    return {
        courses: state.courses.courses,
        course: state.courses.course
    }
}


const dispatchToPropertyMapper = (dispatch) => {
    return {
        findCourses: () =>
            findAllCourses().then(courses =>
                dispatch({
                    type: "FIND_ALL_COURSES",
                    courses: courses,
                })),
        findEditingCourse: (courseId) => {
           const course = findCourseById(courseId).then(e=>e)
           dispatch({
                type: "FIND_COURSE_BY_ID",
                course: course,
                courseId: courseId
            })},
        }
}


export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(CourseEditorContainer)
