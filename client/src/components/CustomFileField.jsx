import React, { Component } from 'react'
import Fab from "@material-ui/core/Fab";
import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/core";
// Icons
import {
  AddAPhoto,
} from "@material-ui/icons";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class CustomFileField extends Component {
  render() {
    const {
      name,
      classes,
      addFile
    } = this.props
    // console.log(this.props)
    return (
      <React.Fragment>
        <input
          name={name}
          type='file'
          id="contained-button-file"
          accept="image/*"
          className={classes.input}
          onChange={addFile}
        />
        <label htmlFor="contained-button-file">
          <Button component="span" className={classes.button}>
            Upload
        </Button>
        </label>
      </React.Fragment>

    )
  }
}
export default withStyles(styles)(CustomFileField)