import React, { Component } from 'react'
import { connect } from 'react-redux';
import EnhancedTable from '../../../components/EnhancedTable'
import { withStyles } from '@material-ui/core/styles';

// Actions 
import {selectUser} from '../../../actions'
let counter = 0;

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
});

function createData(name, calories, fat, carbs, protein) {
  counter += 1;
  return { id: counter, name, calories, fat, carbs, protein };
}

class UserTable extends Component {
  state = {
    data: this.props.data,
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
    console.log(args)
  }
  handleSelect = (id) => {
    const data = this.props.data.filter(u => u._id === id)
    console.log('Found new Data', data)
    if (data.length) {
      this.props.selectUser(data[0])
    }
  }
  render() {
    return (
      <EnhancedTable
        data={this.state.data}
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

const mapStateToProps = (state) => ({
  data: state.user && state.user.list,
  rows: []
})

const UserTableElement = withStyles(styles)(UserTable)
export default connect(mapStateToProps, {selectUser})(UserTableElement)