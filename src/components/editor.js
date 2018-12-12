import React from "react";
import "./editor.css";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import { textFieldsStyles as classes } from "./text-fields-styles";

const Editor = props => {
  return (
    <div className="editor">
      <TextField
        id="outlined-multiline-static"
        label="Editor"
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

export default withStyles(classes)(Editor);
