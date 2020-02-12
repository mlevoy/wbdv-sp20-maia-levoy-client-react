import React from "react";
import CourseCardComponent from "./CourseCardComponent";
const CourseGridComponent = (attributes) =>
    <div className="container-fluid">
        <button onClick={() => attributes.history.replace('/')} type="button" className="btn wbdv-button wbdv-list-layout">
            <i className="fas fa-list"/>
        </button>
            <div className="row">
            {
                attributes.courses.map(function(course, index) {
                    return <CourseCardComponent
                        showCourseEditor={attributes.showCourseEditor}
                        deleteCourse={attributes.deleteCourse}
                        key={course._id}
                        course={course}/>
                })
            }
            </div>
    </div>
export default CourseGridComponent

