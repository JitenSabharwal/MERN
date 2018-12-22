import React, { Component } from 'react'
import { connect } from 'react-redux'
import EnhancedTable from '../../../components/EnhancedTable.jsx'
import { withStyles } from '@material-ui/core/styles'

import {findUser} from '../../../helpers/util'
// Actions
import { selectUser, deleteUser, deleteAllUsers } from '../../../actions'
// Helpers
import {USER_TABLE_HEADS} from '../../../helpers/constants'
import UserTableStyle from '../../../helpers/ComponentStyles/UserTable.jsx'
class UserTable extends Component {
  state = {
    rowHeads: USER_TABLE_HEADS,
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
        rowHeads={this.state.rowHeads}
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
  }
}

const UserTableElement = withStyles(UserTableStyle)(UserTable)
export default connect(mapStateToProps, { selectUser, deleteUser, deleteAllUsers })(UserTableElement)
