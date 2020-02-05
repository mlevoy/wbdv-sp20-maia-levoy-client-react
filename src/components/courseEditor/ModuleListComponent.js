import React from "react";
import ModuleListItem from "./ModuleListItemComponent";

const ModuleList = ({modules}) =>
    <div className>
            <ul className="list-group wbdv-module-list">
                {
                    modules.map(module =>
                        <ModuleListItem
                            key={module._id}
                            module={module}/>
                    )
                }
            </ul>
            <div className="d-flex justify-content-end my-2 text-primary-color">
                <button className="fa-1x btn wbdv-module-item-add-btn"><i className="fas fa-plus mx-1"/>
                </button>
            </div>
    </div>


export default ModuleList