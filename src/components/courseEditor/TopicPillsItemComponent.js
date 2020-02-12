import React from "react";
const TopicPillsItem = ({topicToChange, save, edit, editing, topic, removeTopic, active, select, change}) => {

        return (
            <li className="nav-item wbdv-topic-pill my-1 my-md-0 text-center" onClick = {select}>
                <a className={"nav-link mx-2 d-flex justify-content-center text-white border wbdv-page-tab " + (active ? 'bg-primary' : 'bg-secondary')} href={"#"}>
                    {!editing &&
                    <span className="wbdv-module-item-title">{topic.title}</span>}
                    {!editing &&
                    <i className="btn fas fa-pencil-alt wbdv-edit text-white" onClick={() =>
                        edit()}/>}
                    {editing &&
                    <input
                        onChange={(e)=> change(e)}
                        value={topicToChange.title}/>}
                    {editing &&
                    <span>
                 <i className="btn fas fa-check text-white"
                    onClick={(e) =>
                        save()
                    }
                 />
            <i className="btn d-inline wbdv-row wbdv-button wbdv-delete fas fa fa-times text-white"
               onClick={() => removeTopic(topic._id)}/>
            </span>}
                </a>
            </li>
        )
}
export default TopicPillsItem