import React from "react";

class ParagraphWidget extends React.Component {
    state = {
       // editing: this.props.editing,
        widget: this.props.widget
    }

    render() {
        return (
            <div className="container-fluid border p-3">
                <div className="row form-group">
                    <h3 className="col-lg-7">Paragraph widget</h3>
                    <span className="col-lg-5 row justify-content-lg-end">
                        <button type="button" className="btn bg-warning mx-1" onClick={(e) => {
                                this.props.switchPosition(this.state.widget, true)}}>
                            <i className="fas fa-arrow-up"/>
                        </button>
                        <button type="button" className="btn bg-warning mx-1"onClick={(e) => {
                                this.props.switchPosition(this.state.widget, false)
                                }}>
                            <i className= "fas fa-arrow-down"/>
                        </button>
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
                        </select>
                        <button type="button" className="btn text-white bg-danger mx-1" onClick={() => this.props.deleteWidget(this.props.widget.id)}>
                            <i className = "fas fa-times"/>
                        </button>
                    </span>
                </div>
                <div className="form-group">
                    <input className="form-control my-3" placeholder="Paragraph text" type="text"  onChange={(e) => {
                        const newText = e.target.value;
                        this.setState(prevState => {
                            prevState.widget.text = newText;
                            return prevState
                        })
                    }} value={this.state.widget.text}/>
                    <input className="form-control my-3" placeholder="Widget name" type="text"onChange={(e) => {
                        const newName = e.target.value;
                        this.setState(prevState => {
                            prevState.widget.name = newName;
                            return prevState
                        })
                    }} value={this.state.widget.name}/>
                    <h4>Preview</h4>
                    <p>{this.state.widget.text}</p>
                </div>
            </div>
        )
    }
}

export default ParagraphWidget