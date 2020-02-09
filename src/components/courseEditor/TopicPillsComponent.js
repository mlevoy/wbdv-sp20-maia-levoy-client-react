import React from "react";
import LessonTabsItem from "./LessonTabsItemComponent";
import TopicPillsItem from "./TopicPillsItemComponent";

const TopicPills = ({topics}) =>
    <div>
        <ul className="nav nav-pills wbdv-topic-pill-list my-2 mx-4 flex-column flex-sm-row">
            {
                topics.map(lesson =>
                    <TopicPillsItem
                        key={lesson._id}
                        lesson={lesson}/>
                )

            }
        </ul>
    </div>

export default TopicPills