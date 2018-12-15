import React from "react";
import "./panel.css";
import Paper from "@material-ui/core/Paper";
import CardHeader from "@material-ui/core/CardHeader";
import { textareaStyles } from "./textarea-styles";

const Editor = props => {
  return (
    <div className="panel">
      <CardHeader title="Editor" />
      <Paper style={{ height: "100%" }}>
        <textarea id="editor" style={textareaStyles} />
      </Paper>
    </div>
  );
};

export default Editor;
