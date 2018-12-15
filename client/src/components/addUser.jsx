import React from 'react';
// import Button from '@material-ui/core/Button';
import Button from "components/CustomButtons/Button.jsx";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';
import { connect } from 'react-redux';
// Form 
import { Field, reduxForm } from 'redux-form'
import InputAdornment from '@material-ui/core/InputAdornment';
import Email from "@material-ui/icons/Email";
import Https from "@material-ui/icons/Https";
import { withStyles, TextField, DialogActions } from "@material-ui/core";
import validate from './validation'
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';

// ACTION
import { login } from 'actions'
function Transition(props) {
  return <Slide direction="down" {...props} />;
}
const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => {
  return (
    <TextField
      label={label}
      helperText={touched && error}
      fullWidth
      error={touched && error && error.length > 0}
      {...input}
      {...custom}
    />
  )
}

const addUser = theme => ({
  paper: {
    borderRadius: '8px',
  },
  modalContent: {
    width: '350px',
    "@media (max-width: 576px)": {
      width: "auto"
    },
  },
  form: {
    position: 'relative',
    lineHeight: 4,
    marginTop: '10px',
  },
  closeButton: {
    textAlign: 'right',
    cursor: 'pointer',
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '15px',
    'margin-bottom': '0px',
    "font-size": "large",
  },
  appBar: {
    position: 'relative',
    backgroundColor: '#f44336'
  }
});

// const dangerColor = "#f44336";
class Login extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { classes, children, handleSubmit, pristine, submitting, color, size } = this.props
    return (
      <div>
        <Button
          onClick={this.handleClickOpen}
          color={color}
          size={size}
        >
          {children}
        </Button >
        <Dialog
          classes={{
            paper: classes.paper
          }}
          open={this.state.open}
          TransitionComponent={Transition}
          disableBackdropClick
          keepMounted
          className={classes.modal}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <AppBar className={classes.appBar}>
            <div sm={12} md={12} className={classes.title}>
              <Typography variant="title" color="inherit" className={classes.flex}>
                {"Login"}
              </Typography>
              <span md={2} className={classes.closeButton} onClick={this.handleClose}>
                <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                  <CloseIcon />
                </IconButton>
              </span>
            </div>
          </AppBar>
          <DialogContent
            className={classes.modalContent}
          >
            <form className={classes.form} onSubmit={handleSubmit(this.props.login.bind(this))}>
              <div>
                <Field
                  name="username"
                  component={renderTextField}
                  label="Email"
                  type="email"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end"
                        style={{ color: 'gray' }}
                      >
                        <Email />
                      </InputAdornment>
                    )
                  }}
                />
              </div>
              <div>
                <Field
                  name="password"
                  component={renderTextField}
                  label="Password"
                  type="password"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end"
                        style={{ color: 'gray' }}
                      >
                        <Https />
                      </InputAdornment>
                    )
                  }}
                />
              </div>
              <div>
                <Button variant="flat" disabled={pristine || submitting} color="danger" style={{ margin: 10 }} type="submit">
                  Login
                  </Button>

              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div >
    );
  }
}

const LoginForm = reduxForm({
  // a unique name for the form
  form: 'login',
  validate,
  // asyncValidate
})(Login)

const mapStateToProps = (state) => ({
  foorterContent: state.foorterContent || 'Login to proceed',
  // initialValues: state.form && state.form.profile.address
});

export default connect(mapStateToProps,{login})(withStyles(addUser)(LoginForm))