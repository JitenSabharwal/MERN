import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Hidden } from '@material-ui/core'
import UserTable from './components/UserTable.jsx'
import AddUser from './components/UserForm.jsx'

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

  render () {
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
          {!this.state.editing
            ? (<Grid item xs={12} sm={12}>
              {/* User Form */}
              <AddUser />
            </Grid>)
            : (<Grid item xs={12} sm={12}>
              {/* User Form */}
              <UserTable />
            </Grid>)
          }
        </Hidden>
      </Grid>
    )
  }
}

// UserComponent.propTypes = {
// }

export default withStyles(styles)(UserComponent)
