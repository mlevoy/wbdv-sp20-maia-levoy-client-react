import React from "react";
import ModuleList from "./ModuleListComponent";
import TopicList from "./TopicListComponent";
import WidgetForm from "./WidgetFormComponent";

const CourseEditorComponent = ({hideCourseEditor}) =>
    <div className="container-fluid">
        <div className="row bg-light">
            <div className="col-sm-4 py-2">
                <button type="button" onClick={hideCourseEditor}
                        className="btn wbdv-course-editor wbdv-close"><i className="fas fa-times"/></button>
                <h6 className="text-dark d-inline wbdv-course-title">CS5500 - Software Engineering Graduate</h6>
            </div>
            <div className="col-sm-8">
                <ul className="nav nav-tabs nav-fill flex-column flex-md-row py-2">
                    <li className="nav-item"><a className="nav-link bg-primary text-white border wbdv-page-tab"
                                                href="#">Build</a></li>
                    <li className="nav-item"><a
                        className="nav-link  border bg-primary active wbdv-page-tab text-white" href="#">Pages</a>
                    </li>
                    <li className="nav-item"><a className="nav-link border bg-primary text-white wbdv-page-tab"
                                                href="#">Theme</a></li>
                    <li className="nav-item"><a className="nav-link border bg-primary text-white wbdv-page-tab "
                                                href="#">Store</a></li>
                    <li className="nav-item"><a className="nav-link border bg-primary text-white wbdv-page-tab"
                                                href="#">Apps</a></li>
                    <li className="nav-item"><a className="nav-link border bg-primary text-white wbdv-page-tab"
                                                href="#">Settings</a></li>
                    <button className="fa-1x btn mx-1 wbdv-new-page-btn" href="#"><i className="fas fa-plus"/>
                    </button>
                </ul>
            </div>
        </div>
        <ModuleList modules={[
            {_id: "123", title: "CSS"},
            {_id: "234", title: "HTML"},
            {_id: "345", title: "React JS"},
        ]}/>
        <div className="col-sm-8 bg-white">
            <TopicList modules={[
                {_id: "878", title: "topic 1"},
                {_id: "32432", title: "topic 2"},
                {_id: "747", title: "topic 3"},
            ]}/>
            <div className="container-fluid border my-2 p-3">
                <WidgetForm/>
            </div>
        </div>
    </div>

export default CourseEditorComponent