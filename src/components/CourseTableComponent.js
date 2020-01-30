import React from "react";
import CourseTableRowComponent from "./CourseTableRowComponent";

const CourseTableComponent = ({courses, deleteCourse}) =>
    <div>
        <h2>Course Table {courses.length}</h2>
        <ul>
            {
                courses.map(function(course, index) {
                    return <CourseTableRowComponent
                        deleteCourse={deleteCourse}
                        key={course._id}
                        course={course}/>
                })
            }
        </ul>
    </div>
export default CourseTableComponent