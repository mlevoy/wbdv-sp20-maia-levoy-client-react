import React from "react";
const CourseManagerHeadingComponent = () =>
      <nav className="navbar d-flex justify-content-start navbar-dark sticky-top bg-primary">
        <button type="button" className="btn text-white fa-1x wbdv-field wbdv-hamburger"
                data-toggle="collapse"
                data-target="#navDropdown">
            <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navDropdown">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Login</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Profile</a>
                </li>
            </ul>
        </div>
        <a className="navbar-brand d-none d-sm-inline wbdv-label wbdv-course-manager" href="#">Course Manager</a>
        <div className="form-inline col-10 col-sm-6">
            <input className="form-control col-8 col-sm-9 mr-2 wbdv-field wbdv-new-course"
                type="text"
                id="addCourseFld"
                placeholder="New Course Title"/>
                <a className="fa-1x fa-stack wbdv-button wbdv-add-course" href="#">
                    <i className="fas fa-stack-2x fa-circle text-danger"></i>
                    <i className="fas fa-stack-1x fa-plus fa-inverse"></i>
                </a>
        </div>
    </nav>

export default CourseManagerHeadingComponent;