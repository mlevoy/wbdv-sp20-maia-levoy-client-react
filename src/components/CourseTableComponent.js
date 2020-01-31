import React from "react";
import CourseTableRowComponent from "./CourseTableRowComponent";
const CourseTableComponent = ({courses, deleteCourse, toggle, showCourseEditor}) =>
    <div className = "container border" >
        <table className="table">
            <thead>
            <tr className="row">
                <th className="col-12 col-md-8 col-lg-6 wbdv-header wbdv-title">Title</th>
                <th className="d-none d-md-table-cell col dropdown-toggle wbdv-header wbdv-owner"
                    data-toggle="dropdown">Owned by
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">me</a>
                    </div>
                </th>
                <th className="col d-none d-lg-table-cell wbdv-header wbdv-last-modified">Last modified by me</th>
                <th className="col d-none d-lg-table-cell">
                    <button onClick={toggle} className="btn wbdv-button wbdv-grid-layout">
                        <i className="fas fa-grip-horizontal"></i>
                    </button>
                    <button type="button" className="btn wbdv-header wbdv-sort">
                        <i className="fas fa-sort-alpha-down"></i>
                    </button>
                </th>
            </tr>
            </thead>
            <tbody>
            {
                courses.map(function(course, index) {
                    return <CourseTableRowComponent
                        showCourseEditor={showCourseEditor}
                        deleteCourse={deleteCourse}
                        key={course._id}
                        course={course}/>
                })
            }
            </tbody>
            <tfoot>
            </tfoot>
        </table>
        <a className="fa-2x fa-stack cl-bottom-right" href="#">
            <i className="fas fa-stack-2x fa-circle text-danger"></i>
            <i className="fas fa-stack-1x fa-plus fa-inverse"></i>
        </a>
    </div>

export default CourseTableComponent