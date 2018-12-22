/* eslint-disable import/no-unresolved */
import React from 'react'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
// Form
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { withStyles } from '@material-ui/core'
import InputAdornment from '@material-ui/core/InputAdornment'
// Icons
import {
  VerifiedUser,
  CakeOutlined
} from '@material-ui/icons'
// Validation
import validate from '../../../helpers/validations/user'
// ACTION
import { addUser, updateUser } from '../../../actions'

// Components
import CustomTextField from '../../../components/CustomTextField'
import CustomFileField from '../../../components/CustomFileField'
// Helpers
import UserFormStyle from '../../../helpers/ComponentStyles/UserForm.jsx'
import {DEFAULT_URL} from '../../../helpers/constants'

class Form extends React.Component {
  constructor (props) {
    super(props)
    this.equipmentPhoto = React.createRef()
    this.addImage = this.addImage.bind(this)
    this.addUser = this.addUser.bind(this)
    this.updateUser = this.updateUser.bind(this)
    this.prepareData = this.prepareData.bind(this)
    this.state = {
      profilePic: '',
      fileChanged: false,
    }
  }
  addImage (event) {
    if (event.target.files && event.target.files.length) {
      this.setState({ profilePic: event.target.files[0], fileChanged: true })
    }
  }
  prepareData (data) {
    const userForm = document.getElementById('userForm')
    const newData = new FormData(userForm)
    if (this.state.profilePic) {
      newData.append('profilePic', this.state.profilePic, this.state.profilePic.name)
    }
    if (this.props.userId) {
      newData.append('id', this.props.userId)
    }
    return newData
  }
  addUser (data) {
    return this.props.addUser(this.prepareData(data)).then((resp) => {
      this.props.reset()
      this.setState({ profilePic: '', fileChanged: false })
    })
  }
  updateUser (data) {
    this.setState({ fileChanged: false })
    this.props.reset()
    return this.props.updateUser(this.prepareData(data), this.props.userId)
  }
  render () {
    const { classes, pristine, submitting, handleSubmit } = this.props
    let { imageUrl } = this.props
    if (this.state.fileChanged) {
      imageUrl = this.state.profilePic
    } else if (!imageUrl) {
      // Getting default from constants
      imageUrl = DEFAULT_URL
    }
    return (
      <div className={classes.controll}>
        <form id='userForm' className={classes.form} onSubmit={handleSubmit(this.addUser)}>
          <Field
            name='profilePic'
            type='file'
            accept='image/*'
            label='Enter Hobbies sparated by ,'
            component={CustomFileField}
            imageUrl={imageUrl}
            hidden
            addFile={this.addImage}
          />
          <Field
            name='firstName'
            component={CustomTextField}
            label='First Name'
            type='text'
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'
                  style={{ color: 'gray' }}
                >
                  <VerifiedUser />
                </InputAdornment>
              ),
            }}
          />
          <Field
            name='lastName'
            component={CustomTextField}
            label='Last Name'
            type='text'
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'
                  style={{ color: 'gray' }}
                >
                  <VerifiedUser />
                </InputAdornment>
              ),
            }}
          />
          <Field
            name='birthDate'
            component={CustomTextField}
            label='Birthday'
            type='date'
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'
                  style={{ color: 'gray' }}
                >
                  <CakeOutlined />
                </InputAdornment>
              ),
            }}
          />
          <Field
            name='hobbies'
            component={CustomTextField}
            label='Enter Hobbies sparated by ,'
            type='text'
          />

          {
            this.props.userId
              ? (<Button variant='text' size='large' disabled={!this.state.fileChanged && (pristine || submitting)} color='secondary' onClick={handleSubmit(this.updateUser)}>
                Update User
              </Button>)
              : (<Button variant='text' size='large' disabled={pristine || submitting} color='secondary' type='submit'>
                Add User
              </Button>)
          }
        </form>
      </div >
    )
  }
}

const AddUserForm = reduxForm({
  // a unique name for the form
  form: 'userForm',
  validate,
  enableReinitialize: true,
})(Form)

Form.propTypes = {
  classes: PropTypes.object.isRequired,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  handleSubmit: PropTypes.func.isRequired,
  userId: PropTypes.string,
  addUser: PropTypes.func,
  updateUser: PropTypes.func,
  imageUrl: PropTypes.string.isRequired,
  reset: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  const { user } = state
  const { selected } = user
  return {
    initialValues: user && selected,
    userId: selected && selected._id,
    imageUrl: selected ? selected.profilePic : '/uploads/default.jpeg',
  }
}

export default connect(mapStateToProps, { addUser, updateUser })(withStyles(UserFormStyle)(AddUserForm))
