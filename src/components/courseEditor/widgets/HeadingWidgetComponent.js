import React from "react";

class HeadingWidget extends React.Component {
    state = {
        widget: this.props.widget
    }

    render() {
        return (
            <div>
                <div className="form-group">
                    {!this.props.preview && <input className="form-control my-3" placeholder="Heading text" type="text"  onChange={(e) => {
                        const newText = e.target.value;
                        this.setState(prevState => {
                            prevState.widget.text = newText;
                            return prevState
                        })
                    }} value={this.state.widget.text}/>}
                    {!this.props.preview && <select className="form-control my-3" onChange={(e) => {
                        const newSize = parseInt(e.target.value);
                        this.setState(prevState => {
                            prevState.widget.size = newSize;
                            return prevState
                        })
                    }} value={this.state.widget.size}>
                        <option value={1}>Heading 1</option>
                        <option value={2}>Heading 2</option>
                        <option value={3}>Heading 3</option>
                        <option value={4}>Heading 4</option>
                        <option value={5}>Heading 5</option>
                        <option value={6}>Heading 6</option>
                    </select>}
                    {!this.props.preview && <input className="form-control my-3" placeholder="Widget name" type="text"onChange={(e) => {
                        const newName = e.target.value;
                        this.setState(prevState => {
                            prevState.widget.name = newName;
                            return prevState
                        })
                    }} value={this.state.widget.name}/>}
                    {!this.props.preview && <h4>Preview</h4>}
                    {this.props.widget.size === 1 && <h1>{this.props.widget.text}</h1>}
                    {this.props.widget.size === 2 && <h2>{this.props.widget.text}</h2>}
                    {this.props.widget.size === 3 && <h3>{this.props.widget.text}</h3>}
                    {this.props.widget.size === 4 && <h4>{this.props.widget.text}</h4>}
                    {this.props.widget.size === 5 && <h5>{this.props.widget.text}</h5>}
                    {this.props.widget.size === 6 && <h6>{this.props.widget.text}</h6>}
                </div>
            </div>
        )
    }
}

export default HeadingWidget
