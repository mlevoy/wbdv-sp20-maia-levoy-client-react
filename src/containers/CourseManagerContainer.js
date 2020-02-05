import React from "react";
import CourseManagerHeadingComponent from "../components/CourseManagerHeadingComponent";
import CourseTableComponent from "../components/CourseTableComponent";
import CourseGridComponent from "../components/CourseGridComponent";
import CourseEditor from "../components/courseEditor/CourseEditorComponent";
import {deleteCourse, createCourse, findAllCourses} from "../services/CourseService"

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

    hideCourseEditor = () =>
        this.setState({
            editingCourse: false
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
                    {this.state.layout === 'table' && <CourseTableComponent
                        showCourseEditor={this.showCourseEditor}
                        deleteCourse={this.deleteCourse}
                        toggle={this.toggle}
                        courses={this.state.courses}
                    />}
                        {/*courseSelected={this.courseSelected}/>}*/}
                    {this.state.layout === 'grid' && <CourseGridComponent
                        showCourseEditor={this.showCourseEditor}
                        toggle={this.toggle}
                        courses={this.state.courses}
                        deleteCourse={this.deleteCourse}
                        />}
                </div>
                }
            </div>
        )
    }
}

export default CourseManagerContainer