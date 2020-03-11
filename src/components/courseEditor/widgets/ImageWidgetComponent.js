import React from "react";

class ImageWidget extends React.Component {
    state = {
        widget: this.props.widget
    }

    render() {
        return (
            <div className="container-fluid border p-3">
                {!this.props.preview && <div className="row form-group">
                    <h3 className="col-lg-7">Image widget</h3>
                    <span className="col-lg-5 row justify-content-lg-end">
                       {this.props.widget.placement !== 0 && <button type="button" className="btn bg-warning mx-1" onClick={(e) => {
                           this.props.switchPosition(this.state.widget, true)}}>
                           <i className="fas fa-arrow-up"/>
                       </button>}
                        {this.props.widget.placement !== (this.props.widgets.length -1) && <button type="button" className="btn bg-warning mx-1"onClick={(e) => {
                            this.props.switchPosition(this.state.widget, false)
                        }}>
                            <i className= "fas fa-arrow-down"/>
                        </button>}
                        <select className="form-control col-4 mx-1" onChange={(e) => {
                            const newType = e.target.value;
                            this.setState(prevState => {
                                prevState.widget.type = newType;
                                return prevState
                            }, ()=> {
                                this.props.updateWidgetUI(this.state.widget)
                            })
                        }} value={this.state.widget.type}>
                            <option value={"HEADING"}>Heading</option>
                            <option value={"PARAGRAPH"}>Paragraph</option>
                            <option value={"LIST"}>List</option>
                            <option value={"IMAGE"}>Image</option>
                        </select>
                        <button type="button" className="btn text-white bg-danger mx-1" onClick={() => this.props.deleteWidget(this.props.widget)}>
                            <i className = "fas fa-times"/>
                        </button>
                    </span>
                </div>}
                <div className="form-group">
                    {!this.props.preview &&   <input className="form-control my-3" placeholder="Image URL" type="text"  onChange={(e) => {
                        const newURL = e.target.value;
                        this.setState(prevState => {
                            prevState.widget.resource = newURL;
                            return prevState
                        })
                    }} value={this.state.widget.resource? this.state.widget.resource : ""}/>}
                    {!this.props.preview &&   <input className="form-control my-3" placeholder="Widget name" type="text"onChange={(e) => {
                        const newName = e.target.value;
                        this.setState(prevState => {
                            prevState.widget.name = newName;
                            return prevState
                        })
                    }} value={this.state.widget.name}/>}
                    {!this.props.preview && <h4>Preview</h4>}
                    <img className={"img-fluid"} src={this.props.widget.resource}/>
                </div>
            </div>
        )
    }
}

export default ImageWidget
