import React from "react"

const WidgetHeader = ({preview, widget, switchPosition, updateWidgetUI, widgets, deleteWidget}) => {

    return (
        <div>
            {!preview && <div className="row form-group">
                <h3 className="col-lg-7">{widget.type.charAt(0).toUpperCase() + widget.type.slice(1).toLowerCase() + " Widget"}</h3>
                <span className="col-lg-5 row justify-content-lg-end">
                       {widget.placement !== 0 &&
                       <button type="button" className="btn bg-warning mx-1" onClick={(e) => {
                           switchPosition(widget, true)
                       }}>
                           <i className="fas fa-arrow-up"/>
                       </button>}
                    {widget.placement !== (widgets.length - 1) &&
                    <button type="button" className="btn bg-warning mx-1" onClick={(e) => {
                        switchPosition(widget, false)
                    }}>
                        <i className="fas fa-arrow-down"/>
                    </button>}
                    <select className="form-control col-4 mx-1" onChange={(e) => {
                        const newType = e.target.value;
                        widget.type = newType;
                        updateWidgetUI(widget)
                    }} value={widget.type}>
                            <option value={"HEADING"}>Heading</option>
                            <option value={"PARAGRAPH"}>Paragraph</option>
                            <option value={"LIST"}>List</option>
                            <option value={"IMAGE"}>Image</option>
                        </select>
                        <button type="button" className="btn text-white bg-danger mx-1"
                                onClick={() => deleteWidget(widget)}>
                            <i className="fas fa-times"/>
                        </button>
                    </span>
            </div>}
        </div>
    )

}

export default WidgetHeader
