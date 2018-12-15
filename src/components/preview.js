import React from "react";
import "./panel.css";
import Paper from "@material-ui/core/Paper";
import CardHeader from "@material-ui/core/CardHeader";
import { textareaStyles } from "./textarea-styles";
import PropTypes from "prop-types";

const Preview = ({ text }) => {
  return (
    <div className="panel">
      <CardHeader title="Preview" />
      <Paper style={{ height: "100%" }}>
        <textarea id="preview" style={textareaStyles} disabled value={text} />
      </Paper>
    </div>
  );
};

Preview.propTypes = {
  text: PropTypes.string.isRequired
};

export default Preview;
