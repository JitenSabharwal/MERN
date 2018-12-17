import React, { Component } from 'react'
import { connect } from 'react-redux'
import EnhancedTable from '../../../components/EnhancedTable.jsx'
import { withStyles } from '@material-ui/core/styles'

import {findUser} from '../../../helpers/util'
// Actions
import { selectUser, deleteUser, deleteAllUsers } from '../../../actions'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 1020,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
})
class UserTable extends Component {
  state = {
    rows: [
      { id: 'firstName', numeric: false, disablePadding: true, label: 'FirstName' },
      { id: 'lastName', numeric: false, disablePadding: false, label: 'LastName' },
      { id: 'hobbies', numeric: false, disablePadding: false, label: 'Hobbies' },
      { id: 'birthDate', numeric: false, disablePadding: false, label: 'BirthDate' },
      { id: 'url', numeric: false, disablePadding: false, label: 'Profile' },
    ],
    tableName: 'Users',
    orderBy: 'firstName',
  }
  handleDelete = (args) => {
    if (args.length === 1) {
      this.props.deleteUser(args[0])
    } else {
      this.props.deleteAllUsers()
    }
  }
  handleSelect = (id) => {
    const data = findUser(this.props.data, id)
    if (data.length) {
      this.props.selectUser(data[0])
    } else {
      this.props.selectUser({})
    }
  }
  render () {
    return (
      <EnhancedTable
        data={this.props.data}
        handleDelete={this.handleDelete}
        handleSelect={this.handleSelect}
        orderBy={this.state.orderBy}
        rowHeads={this.state.rows}
        rowsPerPage={10}
        tableName={this.state.tableName}
        {...this.props}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.user.list,
    rows: [],
  }
}

const UserTableElement = withStyles(styles)(UserTable)
export default connect(mapStateToProps, { selectUser, deleteUser, deleteAllUsers })(UserTableElement)
