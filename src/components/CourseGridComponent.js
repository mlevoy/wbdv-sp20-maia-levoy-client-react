import React from "react";
import CourseCardComponent from "./CourseCardComponent";

const CourseGridComponent = (attributes) =>
    <div className="container-fluid">
        <button onClick={attributes.toggle} type="button" className="btn wbdv-button wbdv-list-layout">
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
        <a className="fa-2x fa-stack cl-bottom-right" href="#">
            <i className="fas fa-stack-2x fa-circle text-danger"/>
            <i className="fas fa-stack-1x fa-plus fa-inverse"/>
        </a>
    </div>
export default CourseGridComponent

