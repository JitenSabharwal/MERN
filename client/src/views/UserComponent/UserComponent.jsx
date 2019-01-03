import React from 'react'
// import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Hidden } from '@material-ui/core'
import UserTable from './components/UserTable.jsx'
import AddUser from './components/UserForm.jsx'
import UserMobileComponent from './components/UserMobileView.jsx'
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    width: '100%',
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
})

class UserComponent extends React.Component {
  state = {
    editing: false,
  };
  handleChange = () => {
    this.setState({ editing: !this.state.editing })
  }
  render () {
    // const { classes } = this.props
    return (
      <Grid container spacing={16}>
        {/* For Bigger Screens */}
        <Hidden smDown>
          <Grid item md={4}>
            {/* User Form */}
            <AddUser />
          </Grid>
          <Grid item md={8}>
            {/* User Data Table */}
            <UserTable />
          </Grid>
        </Hidden>
        {/* For Smaller Screens */}
        <Hidden smUp>
          <UserMobileComponent />
        </Hidden>
      </Grid>
    )
  }
}

UserComponent.propTypes = {
  // classes: PropTypes.object,
}

export default withStyles(styles)(UserComponent)
