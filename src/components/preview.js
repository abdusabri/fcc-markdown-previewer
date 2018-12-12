import React from "react";
import "./preview.css";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import { textFieldsStyles as classes } from "./text-fields-styles";

const Preview = props => {
  return (
    <div className="preview">
      <TextField
        id="outlined-multiline-static"
        label="Preview"
        multiline
        rows="4"
        defaultValue="Default Value"
        className={classes.textField}
        margin="normal"
        variant="outlined"
        disabled
      />
    </div>
  );
};

export default withStyles(classes)(Preview);
