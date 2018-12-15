import React, { Component } from "react";
import "./previewer-container.css";
import Editor from "./editor";
import Preview from "./preview";
import { parseTextToMarkdown } from "../utils/markdown-parser";

class PreviewerContainer extends Component {
  state = {
    text: "",
    markedText: ""
  };

  onChange = event => {
    this.setState({ text: event.target.value });
    this.setState({ markedText: parseTextToMarkdown(event.target.value) });
  };

  render() {
    return (
      <div className="previewer-container">
        <Editor text={this.state.text} onChange={this.onChange} />
        <Preview text={this.state.markedText} />
      </div>
    );
  }
}

export default PreviewerContainer;
