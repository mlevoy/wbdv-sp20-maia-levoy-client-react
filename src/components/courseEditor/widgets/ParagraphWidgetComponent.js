import React from "react";
class ParagraphWidget extends React.Component {
    state = {
       // editing: this.props.editing,
        widget: this.props.widget
    }

    render() {
        return (
            <div>

                <div className="form-group">
                    {!this.props.preview &&   <textarea rows= '4' className="form-control my-3" placeholder="Paragraph text" type="text"  onChange={(e) => {
                        const newText = e.target.value;
                        this.setState(prevState => {
                            prevState.widget.text = newText;
                            return prevState
                        })
                    }} value={this.state.widget.text}/>}
                    {!this.props.preview &&   <input className="form-control my-3" placeholder="Widget name" type="text"onChange={(e) => {
                        const newName = e.target.value;
                        this.setState(prevState => {
                            prevState.widget.name = newName;
                            return prevState
                        })
                    }} value={this.state.widget.name}/>}
                    {!this.props.preview && <h4>Preview</h4>}
                    <p>{this.props.widget.text}</p>
                </div>
            </div>
        )
    }
}

export default ParagraphWidget
