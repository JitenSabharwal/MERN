import React, { Component } from 'react'
import EnhancedTable from '../../../components/EnhancedTable'
import { withStyles } from '@material-ui/core/styles';
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
    data: [
      createData('Cupcake', 305, 3.7, 67, 4.3),
      createData('Donut', 452, 25.0, 51, 4.9),
      createData('Eclair', 262, 16.0, 24, 6.0),
      createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
      createData('Gingerbread', 356, 16.0, 49, 3.9),
      createData('Honeycomb', 408, 3.2, 87, 6.5),
      createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
      createData('Jelly Bean', 375, 0.0, 94, 0.0),
      createData('KitKat', 518, 26.0, 65, 7.0),
      createData('Lollipop', 392, 0.2, 98, 0.0),
      createData('Marshmallow', 318, 0, 81, 2.0),
      createData('Nougat', 360, 19.0, 9, 37.0),
      createData('Oreo', 437, 18.0, 63, 4.0),
    ],
    rows: [
      { id: 'name', numeric: false, disablePadding: true, label: 'Dessert (100g serving)' },
      { id: 'calories', numeric: true, disablePadding: false, label: 'Calories' },
      { id: 'fat', numeric: true, disablePadding: false, label: 'Fat (g)' },
      { id: 'carbs', numeric: true, disablePadding: false, label: 'Carbs (g)' },
      { id: 'protein', numeric: true, disablePadding: false, label: 'Protein (g)' },
    ],
    tableName: 'Users',
    orderBy: 'calories',
    handleDelete: (args) => {
      console.log(args)
    }
  }
  render() {
    return (
      <EnhancedTable
        data={this.state.data}
        handleDelete={this.state.handleDelete}
        orderBy={this.state.orderBy}
        rowHeads={this.state.rows}
        rowsPerPage={10}
        tableName={this.state.tableName}
        {...this.props}
      />
    )
  }
}
export default withStyles(styles)(UserTable)