import React from "react";
import LessonTabsItem from "./LessonTabsItemComponent";

const LessonTabs = ({lessons}) =>
    <div>
        <ul className="nav nav-tabs nav-fill flex-column flex-md-row py-2">
            {
                lessons.map(lesson =>
                    <LessonTabsItem
                        key={lesson._id}
                        lesson={lesson}/>
                )
            }
                <button className="fa-1x btn mx-1 wbdv-new-page-btn" href="#"><i className="fas fa-plus"/>
                </button>
        </ul>

    </div>


export default LessonTabs