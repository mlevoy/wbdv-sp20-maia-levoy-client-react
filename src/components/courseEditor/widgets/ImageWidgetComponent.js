import React from "react";

class ImageWidget extends React.Component {
    state = {
        widget: this.props.widget
    }

    render() {
        return (
            <div>
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
