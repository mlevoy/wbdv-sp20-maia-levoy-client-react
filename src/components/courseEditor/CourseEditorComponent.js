import React from "react";
import ModuleList from "./ModuleListComponent";
import TopicPills from "./TopicPillsComponent";
import WidgetForm from "./WidgetFormComponent";
import moduleReducer from "../../reducers/moduleReducer";
import lessonReducer from "../../reducers/lessonReducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import LessonTabs from "./LessonTabsComponent";


const rootReducer = combineReducers({
    modules: moduleReducer,
    lessons: lessonReducer
})

const store = createStore(rootReducer)

const CourseEditorComponent = ({match, history, courseId, moduleId, lessonId}) =>
    <Provider store={store}>
    <div className="container-fluid">
        <div className="row bg-light">
            <div className="col-sm-4 py-2">
                <button className={"btn"} onClick={() => history.push("/")}><i className="fas fa-times"/></button>
                <h6 className="text-dark d-inline wbdv-course-title">{courseId}</h6>
            </div>
            <div className="col-sm-8">
                <LessonTabs lessonId={lessonId}
                            courseId={courseId}
                            match={match}
                            history={history}
                            moduleId={moduleId}/>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-4 bg-light">
        <ModuleList courseId={courseId}
                    history={history}
                    moduleId={moduleId}
        />
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
    </Provider>

export default CourseEditorComponent