import React from "react";
import HeadingWidget from "./widgets/HeadingWidgetComponent";


const WidgetList = () =>
    <div>
    <div className="container-fluid d-flex justify-content-end mx-2">
        <button type="button" className="btn btn-success">Save</button>
        <div className="custom-control btn custom-switch mx-2">
            <input type="checkbox" className="custom-control-input" id="toggle"/>
            <label className="custom-control-label" htmlFor="toggle">Preview</label>
        </div>
    </div>
        <HeadingWidget/>
    </div>
export default WidgetList