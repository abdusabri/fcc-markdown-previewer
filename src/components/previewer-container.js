import React, { Component } from "react";
import "./previewer-container.css";
import Editor from "./editor";
import Preview from "./preview";

class PreviewerContainer extends Component {
  render() {
    return (
      <div className="previewer-container">
        {/* Markdown Previewer! */}
        <Editor />
        <Preview />
      </div>
    );
  }
}

export default PreviewerContainer;
