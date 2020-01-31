import React from "react";

const CourseGridComponent = (attributes) =>
    <div>
    <h2>Course Grid {attributes.courses.length}</h2>
    <button onClick={attributes.toggle} type="button" className="btn wbdv-button wbdv-list-layout">
    <i className="fas fa-list"></i>
    </button>
    </div>
export default CourseGridComponent

