import React from "react";
import ModuleListItem from "./ModuleListItemComponent";
import {connect} from "react-redux";
import {
    CREATE_MODULE,
    FIND_MODULES_FOR_COURSE,
    UPDATE_MODULE,
    deleteModule,
    updateModule
} from "../../actions/moduleActions";
import moduleService from '../../services/ModuleService'

class ModuleList extends React.Component {

    componentDidMount() {
        this.props.findModules(this.props.courseId)
    }

    state = {
        activeModuleId: this.props.moduleId,
        editingModuleId: '',
    }

    render() {
        return (
            <div>
                <ul className="list-group wbdv-module-list">
                    {this.props.modules && this.props.modules.map(module =>
                        <ModuleListItem
                            key={module._id}

                            history={this.props.history}
                            editM={() => {
                                const moduleId = module._id
                                this.props.history.push(`/course-editor/${this.props.courseId}/module/${moduleId}`)
                                this.setState({
                                    editingModuleId: module._id
                                })
                            }}
                            select={() => {
                                const moduleId = module._id
                                this.props.history.push(`/course-editor/${this.props.courseId}/module/${moduleId}`)
                                this.setState({
                                    activeModuleId: module._id
                                })
                            }}
                            save={() => {
                                this.setState({
                                    editingModuleId: ''
                                })
                            }//this.props.editModule(module)}
                            }
                            editing={module._id === this.state.editingModuleId}
                            active={module._id === this.state.activeModuleId}
                            module={module}
                            courseId={this.props.courseId}
                            removeModule = {this.props.removeModule}
                            editModule = {this.props.editModule}/>
                            )
                    }
                            {/*history = {this.props.history}*/}
                            {/*editModule = {this.props.editModule}*/}
                            {/*removeModule = {this.props.removeModule}*/}
                            {/*module={module}/>*/}

                </ul>
                <div className="d-flex justify-content-end my-2 text-primary-color">
                    <button className="fa-1x btn wbdv-module-item-add-btn"
                            onClick={() => this.props.createModule(this.props.courseId, {title: 'New Module'})}>
                        <i className="fas fa-plus mx-1"/>
                    </button>
                </div>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => {
    return {
        modules: state.modules.modules
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {
        findModules: (courseId) =>
            moduleService.findModulesForCourse(courseId)
                .then(actualModules => dispatch({
                    type: FIND_MODULES_FOR_COURSE,
                    modules: actualModules
                })),
        editModule: async (module) => {
            const updatedModule = await moduleService.updateModule(module, module._id)
            dispatch(updateModule(updatedModule))
        },
        removeModule: (moduleId) =>
            moduleService.deleteModule(moduleId)
                .then(status =>
                    dispatch(deleteModule(moduleId))),
        createModule: async (courseId, module) => {
           const response = await moduleService.createModule(courseId, module)
            dispatch({
                        type: CREATE_MODULE,
                        module: response
                    })
        }
    }
}

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(ModuleList)