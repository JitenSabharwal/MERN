import React from 'react';
import Button from "@material-ui/core/Button";
// Form 
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { withStyles, TextField } from "@material-ui/core";
import InputAdornment from '@material-ui/core/InputAdornment';
// Icons
import {
  VerifiedUser,
  CakeOutlined,
} from "@material-ui/icons";
// Validation
import validate from '../../../helpers/validations/user'
// ACTION
import { addUser, updateUser } from '../../../actions'

// Components
import CustomTextField from '../../../components/CustomTextField'
import CustomFileField from '../../../components/CustomFileField'

const formStyle = theme => ({
  form: {
    position: 'relative',
    lineHeight: 4,
    marginTop: '10px',
  },
  controll: {
    padding: theme.spacing.unit * 2,
    width: '100'
  }
});

// const dangerColor = "#f44336";
class Form extends React.Component {
  constructor(props) {
    super(props)
    this.equipmentPhoto = React.createRef()
    this.addImage = this.addImage.bind(this)
    this.addUser = this.addUser.bind(this)
    this.prepareData = this.prepareData.bind(this)
    this.state = {
      profilePic: ''
    }
  }
  addImage(event) {
    if (event.target.files && event.target.files.length) {
      this.setState({ profilePic: event.target.files[0] })
    }
  }
  prepareData(data) {
    const userForm = document.getElementById("userForm")
    const newData = new FormData(userForm)
    if (this.state.profilePic) {
      newData.append('profilePic', this.state.profilePic, this.state.profilePic.name)
    }
    return newData
  }
  addUser(data) {
    this.props.addUser(this.prepareData(data))
      .then(console.log)
      .then(console.log)
  }
  render() {
    const { classes, pristine, submitting, handleSubmit } = this.props
    console.log('Form stae change', this.state.data)
    return (
      <div className={classes.controll}>
        <form id="userForm" className={classes.form} onSubmit={handleSubmit(this.addUser)}>
          <Field
            name="firstName"
            component={CustomTextField}
            label="First Name"
            type="text"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end"
                  style={{ color: 'gray' }}
                >
                  <VerifiedUser />
                </InputAdornment>
              )
            }}
          />
          <Field
            name="lastName"
            component={CustomTextField}
            label="Last Name"
            type="text"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end"
                  style={{ color: 'gray' }}
                >
                  <VerifiedUser />
                </InputAdornment>
              )
            }}
          />
          <Field
            name="birthDate"
            component={CustomTextField}
            label="Birthday"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end"
                  style={{ color: 'gray' }}
                >
                  <CakeOutlined />
                </InputAdornment>
              )
            }}
          />
          <Field
            name="hobbies"
            component={CustomTextField}
            label="Enter Hobbies sparated by ,"
            type="text"
          />
          <Field
            name="profilePic"
            type='file'
            accept="image/*"
            component={CustomFileField}
            hidden={true}
            addFile={this.addImage}
          />
          {/* </input> */}
          {
            this.props.userId ?
              (<Button variant="text" size="large" disabled={pristine || submitting} color="secondary" type="submit">
                Update User
            </Button>)
              :
              (<Button variant="text" size="large" disabled={pristine || submitting} color="secondary" type="submit">
                Add User
          </Button>)
          }
        </form>
      </div >
    );
  }
}

const AddUserForm = reduxForm({
  // a unique name for the form
  form: 'userForm',
  validate,
  enableReinitialize: true,
})(Form)

const mapStateToProps = (state) => ({
  initialValues: state.user && state.user.selected
});

export default connect(mapStateToProps, { addUser })(withStyles(formStyle)(AddUserForm))