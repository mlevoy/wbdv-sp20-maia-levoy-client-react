import React from "react";
import {updateModule} from "../../services/ModuleService";

class ModuleListItem extends React.Component {
    constructor(props) {
        super(props);
        this.save = React.createRef();
    }
    state = {
        selected: this.props.editing,
        module: this.props.module,
    }


    moduleSelected = (e) =>
    {e.target === this.save.current ? this.setState({
        selected: false
    }) : this.setState({
        selected: true})
    }

    render() {
        return (
        <li className={"list-group-item list-group-item-action my-2 d-flex justify-content-between wbdv-module-item "  + (this.state.selected ? 'list-group-item-primary' : '')}>
            {!this.state.selected &&
            <span className="wbdv-module-item-title">{this.props.module.title}</span>}
            {!this.state.selected &&
            <i className="btn d-inline fas fa-pencil-alt wbdv-edit text-primary" onClick={() => {this.setState({
                selected: true})
                const moduleId = this.state.module._id
                this.props.history.push(`/course-editor/${this.props.courseId}/module/${moduleId}`)
            }}/>
            }

            {this.state.selected &&
                    <input
                        onChange={(e) => this.setState({
                            module: {
                                ...this.state.module,
                                title: e.target.value
                            }
                        })}
                        value={this.state.module.title}/>}
            {this.state.selected &&
                <span>
                 <i className="btn fas fa-check text-primary" ref={this.save}
                    onClick={(e) => {
                        this.setState({
                            module: {
                                ...this.state.module,
                            }
                        })
                        this.props.editModule(this.state.module)
                        this.setState({
                            selected: false})
                    }
                    }
                 />
            <i className="btn d-inline wbdv-row wbdv-button wbdv-delete fas fa fa-times text-primary"
               onClick={() => this.props.removeModule(this.state.module._id)}
            />
            </span>}
        </li>
        )
    }
}
export default ModuleListItem

