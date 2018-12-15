import React, { Component } from "react";
import "./previewer-container.css";
import Editor from "./editor";
import Preview from "./preview";

class PreviewerContainer extends Component {
  state = {
    text: "Default text!"
  };

  onChange = event => {
    this.setState({ text: event.target.value });
  };

  render() {
    return (
      <div className="previewer-container">
        <Editor text={this.state.text} onChange={this.onChange} />
        <Preview text={this.state.text} />
      </div>
    );
  }
}

export default PreviewerContainer;
