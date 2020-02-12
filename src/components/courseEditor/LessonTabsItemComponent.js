import React from "react";
const LessonTabsItem = ({lessonToChange, save, edit, editing, lesson, removeLesson, active, select, change}) => {

        return (
            <li className = {"nav-item"} onClick = {select}>
                <a className={"nav-link text-white border wbdv-page-tab " + (active ? 'bg-primary' : 'bg-secondary')} href={"#"}>
                    {!editing &&
                <span className="wbdv-module-item-title">{lesson.title}</span>}
                {!editing &&
                <i className="btn fas fa-pencil-alt wbdv-edit text-white" onClick={() =>
                    edit()}/>}
                    {editing &&
                    <input
                        onChange={(e)=> change(e)}
                        value={lessonToChange.title}/>}
                {editing &&
                <span>
                 <i className="btn fas fa-check text-white"
                    onClick={(e) =>
                        save()
                    }
                 />
            <i className="btn d-inline wbdv-row wbdv-button wbdv-delete fas fa fa-times text-white"
               onClick={() => removeLesson(lesson._id)}/>
            </span>}
                </a>
            </li>
        )
    }

export default LessonTabsItem