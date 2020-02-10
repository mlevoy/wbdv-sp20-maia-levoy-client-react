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
            <li className="nav-item wbdv-topic-pill wbdv-topic-add-btn my-1 my-md-0 text-center">
                <a className="nav-link bg-secondary text-white mx-2" href="#">
                    +
                </a>
            </li>
        </ul>
    </div>

export default TopicPills