import React from "react";

const ModuleListItem = ({moduleToChange, save, edit, editing, module, removeModule, active, select, change}) => {

        return (
        <li onClick = {select}
            className={"list-group-item list-group-item-action my-2 d-flex justify-content-between wbdv-module-item "  + (active ? 'list-group-item-primary' : '')}>
            {!editing &&
            <span className="wbdv-module-item-title">{module.title}</span>}
            {!editing &&
            <i className="btn d-inline fas fa-pencil-alt wbdv-edit text-primary" onClick={() =>
                edit()}/>
            }

            {active && editing &&
                    <input
                        onChange={(e)=> change(e)}
                        value={moduleToChange.title}/>}
            {active && editing &&
                <span>
                 <i className="btn fas fa-check text-primary"
                    onClick={(e) =>
                        save()
                    }
                 />
            <i className="btn d-inline wbdv-row wbdv-button wbdv-delete fas fa fa-times text-primary"
               onClick={() => removeModule(module._id)}
            />
            </span>}
        </li>
        )
}
export default ModuleListItem

