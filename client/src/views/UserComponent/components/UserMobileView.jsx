import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import UserMobileTable from './UserMobileTable.jsx'
import AddUser from './UserForm.jsx'
import UserMobileDrawer from './UserMobileDrawer.jsx'
import { connect } from 'react-redux'
import Fab from '@material-ui/core/Fab'
import { deleteUser } from '../../../actions'
import {
  Delete
} from '@material-ui/icons'

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
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 12,
    'z-index': 5,
  },
})

class UserMobileComponent extends React.Component {
  state = {
    editing: false,
  };
  handleChange = () => {
    this.setState({ editing: !this.state.editing })
  }
  handleDelete = () => {
    const { deleteUser, selectedUser } = this.props
    if (selectedUser && selectedUser._id) {
      deleteUser(selectedUser._id)
    }
  }
  render () {
    const { selected, classes } = this.props
    return (
      <React.Fragment>
        {!this.state.editing
          ? (
            <AddUser />
          )
          : (
            <UserMobileTable />
          )
        }
        {selected
          ? <React.Fragment>
            <Fab color='secondary' className={classes.fab} aria-label='Delete User' onClick={this.handleDelete}>
              <Delete />
            </Fab>
          </React.Fragment>
          : <div />
        }
        <UserMobileDrawer handleChange={this.handleChange} />
      </React.Fragment>
    )
  }
}

UserMobileComponent.propTypes = {
  selected: PropTypes.bool.isRequired,
  classes: PropTypes.object,
  deleteUser: PropTypes.func.isRequired,
  selectedUser: PropTypes.object.isRequired,
}
const UserMobileView = withStyles(styles)(UserMobileComponent)
const mapStateToProps = (state) => {
  return {
    selected: !!state.user.selected && !!state.user.selected._id,
    selectedUser: state.user.selected || {},
  }
}
export default connect(mapStateToProps, { deleteUser })(UserMobileView)
