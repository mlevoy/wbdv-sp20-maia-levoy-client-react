import React from "react";
import CourseManagerHeadingComponent from "../components/CourseManagerHeadingComponent";
import CourseTableComponent from "../components/CourseTableComponent";
import CourseGridComponent from "../components/CourseGridComponent";

class CourseManagerContainer extends React.Component {
    state = {
        layout: 'table',
        courses: [
            {_id: '123', title: 'Course A', owned_by: 'me', last_modified: "6:45 PM"},
            {_id: '234', title: 'Course B', owned_by: 'me', last_modified: "6:45 PM"},
            {_id: '345', title: 'Course C', owned_by: 'me', last_modified: "6:45 PM"},
            {_id: '567', title: 'Course D', owned_by: 'me', last_modified: "6:45 PM"},
            {_id: '456', title: 'Course E', owned_by: 'me', last_modified: "6:45 PM"}
        ]
    }

    deleteCourse = (deletedCourse) => {
        this.setState(prevState => ({
            courses: prevState.courses.filter(course => course._id !== deletedCourse._id)
        }))
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

    render() {
        return(
            <div>
                <CourseManagerHeadingComponent/>
                {this.state.layout === 'table' && <CourseTableComponent deleteCourse={this.deleteCourse} toggle={this.toggle} courses={this.state.courses}/>}
                {this.state.layout === 'grid' && <CourseGridComponent toggle={this.toggle} courses={this.state.courses}/>}
            </div>
        )
    }
}

export default CourseManagerContainer