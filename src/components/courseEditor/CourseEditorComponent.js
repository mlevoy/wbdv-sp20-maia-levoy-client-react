import React from "react";
import ModuleList from "./ModuleListComponent";
import TopicPills from "./TopicPillsComponent";
import WidgetForm from "./WidgetFormComponent";
import moduleReducer from "../../reducers/moduleReducer";
import lessonReducer from "../../reducers/lessonReducer";
import topicReducer from "../../reducers/topicReducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import LessonTabs from "./LessonTabsComponent";


const rootReducer = combineReducers({
    modules: moduleReducer,
    lessons: lessonReducer,
    topics: topicReducer
})

const store = createStore(rootReducer)

const CourseEditorComponent = ({match, history, courseId, moduleId, lessonId, topicId}) =>
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
            <TopicPills lessonId={lessonId}
                        courseId={courseId}
                        topicId={topicId}
                        history={history}
                        moduleId={moduleId}/>
            <WidgetForm/>
            <button className="btn nav-link bg-danger text-white mx-2 float-right wbdv-add-widget" href="#">+</button>

        </div>
        </div>
    </div>
    </Provider>

export default CourseEditorComponent