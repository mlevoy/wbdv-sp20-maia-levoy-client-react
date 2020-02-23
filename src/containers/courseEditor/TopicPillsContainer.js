import React from "react";
import TopicPillsItem from "../../components/courseEditor/TopicPillsItemComponent";
import {connect} from "react-redux";
import topicService from "../../services/TopicService";
import {
    createTopic,
    deleteTopic,
    findTopics,
    updateTopic
} from "../../actions/topicActions";
class TopicPills extends React.Component {
    componentDidMount() {
        this.mounted = true
        this.props.findTopics(this.props.lessonId)
    }

    componentWillUnmount(){
        this.mounted = false
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.lessonId !== prevProps.lessonId) {
            this.props.findTopics(this.props.lessonId)
        }
    }

    state = {
        topicToChange: '',
        activeTopicId: this.props.topicId,
        editingTopicId: '',
    }

    render() {

        return (
            <div>
                <ul className="nav nav-pills wbdv-topic-pill-list my-2 mx-4 flex-column flex-sm-row">
                    {this.props.topics && this.props.topics.map(topic =>
                        <TopicPillsItem
                            key={topic.id}
                            history={this.props.history}
                            edit={() => {
                                const topicId = topic.id
                                const lessonId = this.props.lessonId
                                this.props.history.push(`/course-editor/${this.props.courseId}/lesson/${lessonId}/topic/${topicId}`)
                                this.setState({
                                    editingTopicId: topic.id,
                                    topicToChange: topic
                                })
                            }}
                            select={() => {
                                const topicId = topic.id
                                const lessonId = this.props.lessonId
                                const moduleId = this.props.moduleId
                                this.props.history.push(`/course-editor/${this.props.courseId}/module/${moduleId}/lesson/${lessonId}/topic/${topicId}`

                                // ${lessonId}${topicId ?"/topic/"+topicId:"ASDF" }`
                                  )//
                                this.setState({
                                    activeTopicId: topicId
                                })
                            }}
                            save={() => {
                                this.setState({
                                    editingTopicId: ''
                                })
                                this.props.editTopic(this.state.topicToChange)
                            }}
                            change={(e) => {
                                this.setState({
                                    topicToChange: {
                                        ...this.state.topicToChange,
                                        title: e.target.value
                                    }
                                })
                            }}
                            editing={topic.id === this.state.editingTopicId}
                            active={topic.id === this.state.activeTopicId}
                            topic={topic}
                            topicToChange={this.state.topicToChange}
                            removeTopic={async (id) => {
                                await this.props.removeTopic(id)
                                const lessonId = this.props.lessonId
                                const moduleId = this.props.moduleId
                                await this.props.history.replace(`/course-editor/${this.props.courseId}/module/${moduleId}/lesson/${lessonId}`)
                                this.mounted && this.setState({
                                    topicToChange: '',
                                    activeTopicId: this.props.topicId,
                                    editingTopicId: ''})
                            }}
                            editTopic={this.props.editTopic}/>
                    )
                    }
                    {this.props.lessonId && this.props.lessons.length && !this.props.topics.length
                    && <h5 className={"d-flex justify-content-center my-2"}>Add Topic</h5>}
                    {this.props.lessonId &&
                    <li className="d-flex justify-content-center nav-item wbdv-topic-pill wbdv-topic-add-btn my-1 my-md-0 text-center">
                        <button className="nav-link bg-secondary text-white mx-2"
                                onClick={() => this.props.createTopic(this.props.lessonId, {title: 'New Topic'})}>
                            <i className="fas fa-plus"/>
                        </button>
                    </li>}
                </ul>
            </div>
        )
    }
}


const stateToPropertyMapper = (state) => {
    return {
        topics: state.topics.topics,
        lessons: state.lessons.lessons
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {
        findTopics: (lessonId) =>
            topicService.findTopicsForLesson(lessonId).then(topics =>
                dispatch(findTopics(topics))),
        editTopic: async (topic) => {
            const status = await topicService.updateTopic(topic.id, topic)
            dispatch(updateTopic(topic))
        },
        removeTopic: (topicId) =>
            topicService.deleteTopic(topicId)
                .then(status =>
                    dispatch(deleteTopic(topicId))),
        createTopic: async (lessonId, topic) => {
            const response = await topicService.createTopic(lessonId, topic)
            dispatch(createTopic(response))
        }
    }
}

export default connect (stateToPropertyMapper, dispatchToPropertyMapper) (TopicPills)