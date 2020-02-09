import React from "react";
import ModuleList from "./ModuleListComponent";
import TopicPills from "./TopicPillsComponent";
import WidgetForm from "./WidgetFormComponent";
// import moduleReducer from "../../reducers/moduleReducer";
// import lessonReducer from "../../reducers/lessonReducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import LessonTabs from "./LessonTabsComponent";

const rootReducer = combineReducers({
    // modules: moduleReducer,
    // lessons: lessonReducer
})

const store = createStore(rootReducer)

const CourseEditorComponent = ({match, history, courseId, moduleId, lessonId}) =>
    <div className="container-fluid">
        <div className="row bg-light">
            <div className="col-sm-4 py-2">
                <button className={"btn"} onClick={() => history.push("/")}><i className="fas fa-times"/></button>
                <h6 className="text-dark d-inline wbdv-course-title">CS5500 - Software Engineering Graduate</h6>
            </div>
            <div className="col-sm-8">
                <LessonTabs lessons={[
                    {_id: "8543", title: "Lesson 1"},
                    {_id: "993", title: "Lesson 2"},
                    {_id: "028", title: "Lesson 3"},
                ]}/>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-4 bg-light">
        <ModuleList modules={[
            {_id: "123", title: "CSS"},
            {_id: "234", title: "HTML"},
            {_id: "345", title: "React JS"},
        ]}/>
            </div>
        <div className="col-sm-8 bg-white">
            <TopicPills topics={[
                {_id: "878", title: "topic 1"},
                {_id: "32432", title: "topic 2"},
                {_id: "747", title: "topic 3"},
            ]}/>
            <WidgetForm/>
            <button className="btn nav-link bg-danger text-white mx-2 float-right wbdv-add-widget" href="#">+</button>

        </div>
        </div>
    </div>

export default CourseEditorComponent