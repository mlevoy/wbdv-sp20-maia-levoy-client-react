import React from "react";
import ModuleListItem from "./ModuleListItemComponent";
import {connect} from "react-redux";
import {
    CREATE_MODULE,
    UPDATE_MODULE,
    deleteModule,
    updateModule, findModules
} from "../../actions/moduleActions";
import moduleService from '../../services/ModuleService'
class ModuleList extends React.Component {

    componentDidMount() {
        this.props.findModules(this.props.courseId)
    }

    state = {
        moduleToChange: '',
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
                            edit={() => {
                                const moduleId = module._id
                                this.props.history.push(`/course-editor/${this.props.courseId}/module/${moduleId}`)
                                this.setState({
                                    editingModuleId: module._id,
                                    moduleToChange: module
                                })
                            }}
                            select={() => {
                                const moduleId = module._id
                                this.props.history.push(`/course-editor/${this.props.courseId}/module/${moduleId}`)
                                this.setState({
                                    activeModuleId: moduleId
                                })
                            }}
                            save={() => {
                                this.setState({
                                    editingModuleId: ''
                                })
                                this.props.editModule(this.state.moduleToChange)
                            }}
                            change={(e) => {
                                this.setState({
                                moduleToChange: {
                                    ...this.state.moduleToChange,
                                    title: e.target.value
                                }
                            })

                            }}
                            editing={module._id === this.state.editingModuleId}
                            active={module._id === this.state.activeModuleId}
                            module={module}
                            moduleToChange={this.state.moduleToChange}
                            removeModule = {this.props.removeModule}
                            editModule = {this.props.editModule}/>
                            )}
                    <div className="d-flex justify-content-center my-2 text-primary-color">
                        <button className="fa-1x btn wbdv-module-item-add-btn"
                                onClick={() => this.props.createModule(this.props.courseId, {title: 'New Module'})}>
                            <i className="fas fa-plus mx-1"/>
                        </button>
                    </div>

                </ul>
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
            moduleService.findModulesForCourse(courseId).then(modules=>
                dispatch(findModules(modules))),
        editModule: async (module) => {
            const status = await moduleService.updateModule(module, module._id)
            dispatch(updateModule(module))
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