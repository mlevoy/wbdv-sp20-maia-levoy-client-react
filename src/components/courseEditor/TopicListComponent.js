import React from "react";
//import TopicListItem from "./TopicListItemComponent";

const TopicList = ({topics}) =>
    <div>
        <ul className="nav nav-pills wbdv-topic-pill-list my-2 mx-4 flex-column flex-sm-row">
            <li className="nav-item wbdv-topic-pill my-1 my-md-0">
                <a className="nav-link mx-2 bg-primary text-white" href="#">
                    Topic 1
                </a>
            </li>
            <li className="nav-item wbdv-topic-pill my-1 my-md-0">
                <a className="nav-link mx-2 nav-link-active bg-primary text-white active" href="#">
                    Topic 2
                </a>
            </li>
            <li className="nav-item wbdv-topic-pill my-1 my-md-0">
                <a className="nav-link mx-2 bg-primary text-white" href="#">
                    Topic 3
                </a>
            </li>
            <li className="nav-item wbdv-topic-pill wbdv-topic-add-btn my-1 my-md-0">
                <a className="nav-link bg-primary text-white mx-2" href="#">
                    +
                </a>
            </li>
        </ul>
        <div className="container-fluid d-flex justify-content-end mx-2">
            <button type="button" className="btn btn-success">Save</button>
            <div className="custom-control btn custom-switch mx-2">
                <input type="checkbox" className="custom-control-input" id="toggle"/>
                    <label className="custom-control-label" htmlFor="toggle">Preview</label>
            </div>
        </div>
    </div>

export default TopicList