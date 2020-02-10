import React from "react";
import {updateModule} from "../../services/ModuleService";

class ModuleListItem extends React.Component {
    constructor(props) {
        super(props);
        this.save = React.createRef();
    }
    state = {
        selected: this.props.active,
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
        <li onClick = {this.props.select}
            className={"list-group-item list-group-item-action my-2 d-flex justify-content-between wbdv-module-item "  + (this.props.active ? 'list-group-item-primary' : '')}>
            {!this.props.editing &&
            <span className="wbdv-module-item-title">{this.props.module.title}</span>}
            {!this.props.editing &&
            <i className="btn d-inline fas fa-pencil-alt wbdv-edit text-primary" onClick={() => {
                // this.setState({
                // selected: true})
                this.props.edit()
                const moduleId = this.state.module._id
            }}/>
            }

            {this.props.active && this.props.editing &&
                    <input
                        onChange={(e) => this.setState({
                            module: {
                                ...this.state.module,
                                title: e.target.value
                            }
                        })}
                        value={this.state.module.title}/>}
            {this.props.active && this.props.editing &&
                <span>
                 <i className="btn fas fa-check text-primary" ref={this.save}
                    onClick={(e) => {
                        this.setState({
                            module: {
                                ...this.state.module,
                            }
                        })
                        // this.props.editModule(this.state.module)
                        this.props.save()
                        // this.setState({
                        //     selected: false})
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

