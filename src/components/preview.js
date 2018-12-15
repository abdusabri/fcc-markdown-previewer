import React from "react";
import "./panel.css";
import Paper from "@material-ui/core/Paper";
import CardHeader from "@material-ui/core/CardHeader";
import { textareaStyles } from "./textarea-styles";

const Preview = props => {
  return (
    <div className="panel">
      <CardHeader title="Preview" />
      <Paper style={{ height: "100%" }}>
        <textarea id="preview" style={textareaStyles} disabled />
      </Paper>
    </div>
  );
};

export default Preview;
