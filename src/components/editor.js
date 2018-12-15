import React from "react";
import "./panel.css";
import Paper from "@material-ui/core/Paper";
import { textareaStyles } from "./textarea-styles";

const Editor = props => {
  return (
    <div className="panel">
      <Paper style={{ height: "100%" }}>
        <textarea style={textareaStyles} />
      </Paper>
    </div>
  );
};

export default Editor;
