import React from "react";

const CourseTableRowComponent = ({course, deleteCourse}) =>
    <tr className="row wbdv-row wbdv-course">
        <td className="col-10 col-md-8 col-lg-6">
                <span className="d-flex">
                    <a href="/course-editor/course-editor.template.client.html">
                        <i className="fas fa-file-alt text-primary mx-2 wbdv-row wbdv-icon"></i>
                    </a>
                        <a className="text-dark wbdv-row wbdv-title text-truncate" href="/course-editor/course-editor.template.client.html">{course.title}</a>
                </span>
        </td>
        {/*TODO owner and modified date dynamic*/}
        <td className="col d-none d-md-table-cell wbdv-row wbdv-owner">me</td>
        <td className="col d-none d-lg-table-cell wbdv-row wbdv-modified-date">6:45 PM</td>
        <td className="col-2">
            <button onClick={() => deleteCourse(course)} type="button" className="btn pt-0 wbdv-row wbdv-button wbdv-delete"><i className="fas fa-times"></i>
            </button>
        </td>
    </tr>
export default CourseTableRowComponent