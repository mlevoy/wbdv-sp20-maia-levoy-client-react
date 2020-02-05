import React from "react";

const ModuleListItem = ({module}) =>
    <li className="list-group-item-primary list-group-item list-group-item-action my-2 d-flex justify-content-between wbdv-module-item">
        <span className="wbdv-module-item-title">{module.title}</span>
        <button type="button" className="btn wbdv-module-item-delete-btn"><i
            className="fas fa-times fa"/></button>
    </li>
export default ModuleListItem

