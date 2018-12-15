import React from "react";
import "./panels.css";
import Paper from "@material-ui/core/Paper";
import CardHeader from "@material-ui/core/CardHeader";
import PropTypes from "prop-types";

const Editor = ({ text, onChange }) => {
  return (
    <div className="panel">
      <CardHeader title="Editor" />
      <Paper style={{ height: "100%" }}>
        <textarea
          id="editor"
          className="markdown-container"
          value={text}
          onChange={onChange}
        />
      </Paper>
    </div>
  );
};

Editor.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Editor;
