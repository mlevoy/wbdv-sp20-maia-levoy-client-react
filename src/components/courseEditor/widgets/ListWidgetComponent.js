import React from "react";

class ListWidget extends React.Component {
    state = {
        widget: this.props.widget
    }

    render() {
        return (
            <div>
                <div className="form-group">
                    {!this.props.preview && <textarea rows="3" className="form-control my-3" placeholder="Enter one list item per line" type="text"  onChange={(e) => {
                        const newText = e.target.value;
                        this.setState(prevState => {
                            prevState.widget.text = newText;
                            return prevState
                        }
                        )
                    }} value={this.state.widget.text}/>}
                    {!this.props.preview && <select className="form-control my-3" onChange={(e) => {
                        const newStyle = e.target.value;
                        this.setState(prevState => {
                            prevState.widget.style = newStyle;
                            return prevState
                        })
                    }} value={this.state.widget.style}>
                        <option value={"UNORDERED"}>Unordered list</option>
                        <option value={"ORDERED"}>Ordered List</option>
                    </select>}
                    {!this.props.preview && <input className="form-control my-3" placeholder="Widget name" type="text"onChange={(e) => {
                        const newName = e.target.value;
                        this.setState(prevState => {
                            prevState.widget.name = newName;
                            return prevState
                        })
                    }} value={this.state.widget.name}/>}
                    {!this.props.preview && <h4>Preview</h4>}
                    {(this.props.widget.style === "UNORDERED" || this.props.widget.style === "") && <ul className="text-wrap">
                        {this.props.widget.text &&
                         this.props.widget.text.split('\n').map((line,i) => {return <li key={i}>{line}</li>
                        })}
                    </ul>}
                    {this.props.widget.style === "ORDERED" && <ol className="text-wrap">{this.props.widget.text &&
                    this.props.widget.text.split('\n').map((line,i) => {return <li key={i}>{line}</li>
                    })}
                    </ol>}

                </div>
            </div>
        )
    }
}

export default ListWidget
