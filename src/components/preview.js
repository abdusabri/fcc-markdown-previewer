import React from "react";
import "./panels.css";
import Paper from "@material-ui/core/Paper";
import CardHeader from "@material-ui/core/CardHeader";
import PropTypes from "prop-types";
import Parser from "html-react-parser";
import { Scrollbars } from "react-custom-scrollbars";

const Preview = ({ text }) => {
  return (
    <div className="panel">
      <CardHeader title="Preview" />

      <Paper style={{ height: "100%" }}>
        <Scrollbars autoHide>
          <div id="preview" className="markdown-container">
            {Parser(text)}
          </div>
        </Scrollbars>
      </Paper>
    </div>
  );
};

Preview.propTypes = {
  text: PropTypes.string.isRequired
};

export default Preview;
