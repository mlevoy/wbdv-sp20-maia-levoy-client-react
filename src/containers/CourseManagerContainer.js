import React from "react";
import CourseManagerHeadingComponent from "../components/CourseManagerHeadingComponent";
import CourseTableComponent from "../components/CourseTableComponent";
import CourseGridComponent from "../components/CourseGridComponent";
import CourseEditor from "../components/CourseEditorComponent";
import {deleteCourse, createCourse, findAllCourses} from "../services/CourseService"


class CourseManagerContainer extends React.Component {
    state = {
        layout: 'table',
        editingCourse: false,
        newCourseTitle: '',
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

    toggle = () => {
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

    hideCourseEditor = () =>
        this.setState({
            editingCourse: false
        })

    addCourse = async () =>
    {
        const newCourse = {
            title: this.state.newCourseTitle
        }
        const actualCourse = await createCourse(newCourse)
        const allCourses = await findAllCourses()
        this.setState({
            courses: allCourses
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

            <div>
                {
                    this.state.editingCourse
                    && <CourseEditor hideCourseEditor={this.hideCourseEditor}/>
                }
                {!this.state.editingCourse &&
                <div>
                    <CourseManagerHeadingComponent updateForm={this.updateForm}
                                                   addCourse={this.addCourse}
                                                   newValue={this.state.newCourseTitle}/>
                    {this.state.layout === 'table' && <CourseTableComponent showCourseEditor={this.showCourseEditor}
                                          deleteCourse={this.deleteCourse}
                                          toggle={this.toggle}
                                          courses={this.state.courses}/>}
                    {this.state.layout === 'grid' && <CourseGridComponent showCourseEditor={this.showCourseEditor}
                                         toggle={this.toggle}
                                         courses={this.state.courses}/>}
                </div>
                }
            </div>
        )
    }
}

export default CourseManagerContainer