import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CustomImageButton from './CustomImageButton'
import { withStyles } from "@material-ui/core";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class CustomFileField extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imageUrl: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.readURL = this.readURL.bind(this)
  }
  handleButtonCLick = (event) => {
    const _file = document.getElementById("contained-button-file")
    _file.click()
  }
  handleInputChange(event) {
    const {addFile} = this.props
    this.readURL(event.target)
    addFile(event)
  }
  readURL(input){
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = (e) => {
        this.setState({imageUrl: e.target.result})
      }
      reader.readAsDataURL(input.files[0]);
    }
  }
  render() {
    const {
      name,
      classes,
      imageUrl,
    } = this.props
    if (this.state.imageUrl !== imageUrl) {
      this.setState({imageUrl})
    }
    const image = {
      url:  this.state.imageUrl || imageUrl,
      title: 'Click to change',
      width: '100%',
    }
    // console.log(this.props)
    return (
      <React.Fragment>
        <input
          name={name}
          type='file'
          id="contained-button-file"
          accept="image/*"
          className={classes.input}
          onChange={this.handleInputChange}
        />
        <label htmlFor="contained-button-file">
          {image.url ?
            <CustomImageButton image={image} onClick={this.handleButtonCLick}/>
            :
            (<Button component="span" className={classes.button}>
              Upload
              </Button>)
          }

        </label>
      </React.Fragment>

    )
  }
}

CustomFileField.propTypes = {
  classes: PropTypes.object.isRequired,
  addFile: PropTypes.func.isRequired,
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string,
};

export default withStyles(styles)(CustomFileField)