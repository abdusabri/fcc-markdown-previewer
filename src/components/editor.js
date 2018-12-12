import React from "react";
import "./editor.css";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import { withStyles } from "@material-ui/core/styles";
import { textFieldsStyles } from "./text-fields-styles";

const Editor = props => {
  return (
    <div className="editor">
      <Card style={{ height: "100%" }}>
        <TextField
          id="outlined-multiline-static"
          multiline
          rows="4"
          defaultValue="Default Value"
          classes={{
            root: props.classes.root
          }}
          margin="none"
          fullWidth
          variant="outlined"
          autoFocus
        />
      </Card>
    </div>
  );
};

export default withStyles(textFieldsStyles)(Editor);
