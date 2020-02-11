import React from "react";
import LessonTabsItem from "./LessonTabsItemComponent";
import {connect} from "react-redux";
import lessonService from "../../services/LessonService";
import {
    createLesson,
    deleteLesson,
    findLessons,
    updateLesson
} from "../../actions/lessonActions";
class LessonTabs extends React.Component {

    componentDidMount() {
        this.props.findLessons(this.props.moduleId)
    }

    state = {
        lessonToChange: '',
        activeLessonId: this.props.lessonId,
        editingLessonId: '',
    }

    render() {
        return (
            <div>
                <ul className="nav nav-tabs nav-fill flex-column flex-md-row py-2">
                    {this.props.lessons && this.props.lessons.map(lesson =>
                            <LessonTabsItem
                                key={lesson._id}
                                history={this.props.history}
                                edit={() => {
                                    const lessonId = lesson._id
                                    this.props.history.push(`/course-editor/${this.props.courseId}/lesson/${lessonId}`)
                                    this.setState({
                                        editingLessonId: lesson._id,
                                        lessonToChange: lesson
                                    })
                                }}
                                select={() => {
                                    const lessonId = lesson._id
                                    const moduleId = this.props.moduleId
                                    this.props.history.push(`/course-editor/${this.props.courseId}/module/${moduleId}/lesson/${lessonId}`)
                                    this.setState({
                                        activeLessonId: lessonId
                                    })
                                }}
                                save={() => {
                                    this.setState({
                                        editingLessonId: ''
                                    })
                                    this.props.editLesson(this.state.lessonToChange)
                                }}
                                change={(e) => {
                                    this.setState({
                                        lessonToChange: {
                                            ...this.state.lessonToChange,
                                            title: e.target.value
                                        }
                                    })
                                    console.log(this.state.lessonToChange)

                                }}
                                editing={lesson._id === this.state.editingLessonId}
                                active={lesson._id === this.state.activeLessonId}
                                lesson={lesson}
                                lessonToChange={this.state.lessonToChange}
                                removeLesson={this.props.removeLesson}
                                editLesson={this.props.editLesson}/>
                        )
                    }
                    <button className="fa-1x btn mx-1 wbdv-new-page-btn" href="#"
                            onClick={() => this.props.createLesson(this.props.moduleId, {title: 'New Lesson'})}><i className="fas fa-plus"/>
                    </button>
                </ul>

            </div>)
    }
}

    const stateToPropertyMapper = (state) => {
    return {
        lessons: state.lessons.lessons
    }
    }

    const dispatchToPropertyMapper = (dispatch) => {
    console.log(dispatch)
    return {
        findLessons: (moduleId) =>
         lessonService.findLessonsForModule(moduleId).then(lessons =>
              dispatch(findLessons(lessons))),
        editLesson: async (lesson) => {
            const status = await lessonService.updateLesson(lesson._id, lesson)
            dispatch(updateLesson(lesson))
        },
        removeLesson: (lessonId) =>
            lessonService.deleteLesson(lessonId)
                .then(status =>
                    dispatch(deleteLesson(lessonId))),
        createLesson: async (moduleId, lesson) => {
            const response = await lessonService.createLesson(moduleId, lesson)
            dispatch(createLesson(response))
        }
    }
}


export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(LessonTabs)