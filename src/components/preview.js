import React from "react";
import "./panel.css";
import Paper from "@material-ui/core/Paper";
import { textareaStyles } from "./textarea-styles";

const Preview = props => {
  return (
    <div className="panel">
      <Paper style={{ height: "100%" }}>
        <textarea style={textareaStyles} disabled />
      </Paper>
    </div>
  );
};

export default Preview;
