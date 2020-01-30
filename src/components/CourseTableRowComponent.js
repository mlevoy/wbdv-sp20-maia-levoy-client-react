import React from "react";

const CourseTableRowComponent = ({course, deleteCourse}) =>
    <li>
        {course.title}
        <button onClick={() => deleteCourse(course)}>Delete</button>
    </li>

export default CourseTableRowComponent