import React from "react";
import CourseManagerHeadingComponent from "../components/CourseManagerHeadingComponent";
import CourseTableComponent from "../components/CourseTableComponent";
import CourseGridComponent from "../components/CourseGridComponent";
import CourseEditor from "./courseEditor/CourseEditorContainer";
import {deleteCourse, createCourse, findAllCourses} from "../services/CourseService"
import {BrowserRouter as Router, Route} from "react-router-dom";

import moduleReducer from "../reducers/moduleReducer";
import lessonReducer from "../reducers/lessonReducer";
import topicReducer from "../reducers/topicReducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import courseReducer from "../reducers/courseReducer"
import widgetReducer from "../reducers/widgetReducer"



const rootReducer = combineReducers({
    courses: courseReducer,
    modules: moduleReducer,
    lessons: lessonReducer,
    topics: topicReducer,
    widgets: widgetReducer
})

const store = createStore(rootReducer)


class CourseManagerContainer extends React.Component {

    state = {
        layout: 'table',
        editingCourse: false,
        newCourseTitle: '',
        newDate: '',
        courses: []
    }

    componentDidMount = async () => {
        //new method using await
        const allCourses = await findAllCourses()
        this.setState({
            courses: allCourses
        })

        //original using .then
        // findAllCourses()
        //     .then(courses => this.setState({
        //         courses: courses
        //     }))
    }


    deleteCourse = async (deletedCourse) => {
        const status = await deleteCourse(deletedCourse._id)
        const courses = await findAllCourses()
        this.setState({
            courses: courses
        })
    }

    toggle = async () => {
        const allCourses = await findAllCourses()
        this.setState({
            courses: allCourses,
        })
        this.setState((prevState) => {
            if(prevState.layout === 'grid') {
                return {
                    layout: 'table'
                }
            } else {
                return {
                    layout: 'grid'
                }
            }
        })
    }

    showCourseEditor = () =>
        this.setState({
            editingCourse: true
        })

    // courseSelected = (e) =>
    //     e.target.
    // setState((prevState) => {
    //         if(prevState.selected === false) {
    //             return {
    //                 selected: true
    //             }
    //         } else {
    //             return {
    //                 selected: false
    //             }
    //         }
    //     })

    addCourse = async () =>
    {
        const newCourse = {
            title: this.state.newCourseTitle,
            date: new Date()
        }
        const actualCourse = await createCourse(newCourse)
        const allCourses = await findAllCourses()
        this.setState({
            courses: allCourses,
            newCourseTitle: '',
            date: ''
        })
        //example without server request
        // this.setState(prevState => ({
        //     courses: [
        //         ...prevState.courses,
        //         {
        //             _id: (new Date()).getTime() + "",
        //             title: prevState.newCourseTitle
        //         }
        //     ]
        // }))
    }

    updateForm = (e) => {
        this.setState({
            newCourseTitle: e.target.value
        })
    }

    render() {
        return(
            <Provider store={store}>
                <div>
                <Router>
                    <Route
                        path="/course-editor/:courseId"
                        exact={true}
                        render={(props) =>
                            <CourseEditor
                                {...props}
                                lessonId={props.match.params.lessonId}
                                moduleId={props.match.params.moduleId}
                                courseId={props.match.params.courseId}
                                topicId={props.match.params.topicId}/>
                        }/>
                    <Route
                        path="/course-editor/:courseId/module/:moduleId"
                        exact={true}
                        render={(props) =>
                            <CourseEditor
                                {...props}
                                lessonId={props.match.params.lessonId}
                                moduleId={props.match.params.moduleId}
                                courseId={props.match.params.courseId}
                                topicId={props.match.params.topicId}/>
                        }/>
                    <Route
                        path="/course-editor/:courseId/module/:moduleId/lesson/:lessonId"
                        exact={true}
                        render={(props) =>
                            <CourseEditor
                                {...props}
                                lessonId={props.match.params.lessonId}
                                moduleId={props.match.params.moduleId}
                                courseId={props.match.params.courseId}
                                topicId={props.match.params.topicId}/>
                        }/>
                    <Route
                        path="/course-editor/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId"
                        exact={true}
                        render={(props) =>
                            <CourseEditor
                                {...props}
                                lessonId={props.match.params.lessonId}
                                moduleId={props.match.params.moduleId}
                                courseId={props.match.params.courseId}
                                topicId={props.match.params.topicId}/>}
                        />
                    <Route
                        path="/"
                        exact={true}
                        render={(props) =>
                            <div>
                            <CourseManagerHeadingComponent updateForm={this.updateForm}
                                                           addCourse={this.addCourse}
                                                           newValue={this.state.newCourseTitle}/>
                            <CourseTableComponent
                                {...props}
                                toggle={this.toggle}
                                showCourseEditor={this.showCourseEditor}
                                deleteCourse={this.deleteCourse}
                                courses={this.state.courses}
                            />
                            </div>
                        }/>
                    <Route
                        path="/grid"
                        exact={true}
                        render={(props) =>
                            <div>
                                <CourseManagerHeadingComponent updateForm={this.updateForm}
                                                               addCourse={this.addCourse}
                                                               newValue={this.state.newCourseTitle}/>
                            <CourseGridComponent
                                {...props}
                                showCourseEditor={this.showCourseEditor}
                                toggle={this.toggle}
                                courses={this.state.courses}
                                deleteCourse={this.deleteCourse}
                            />
                            </div>
                        }/>
                </Router>
            </div>
            </Provider>
        )
    }
}

export default CourseManagerContainer
