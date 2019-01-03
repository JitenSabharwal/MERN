import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import { connect } from 'react-redux'
import {
  TableChart,
  TextFormat
} from '@material-ui/icons'

const styles = {
  root: {
    width: '100%',
    position: 'fixed',
    bottom: '0',
  },
}

class SimpleBottomNavigation extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    if (value !== this.state.value) {
      this.setState({ value })
      this.props.handleChange()
    }
  };

  render () {
    const { classes, selected } = this.props
    const { value } = this.state
    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label={selected ? 'Edit User' : 'User Form'} icon={<TextFormat />} />
        <BottomNavigationAction label='User Table' icon={<TableChart />} />
      </BottomNavigation>
    )
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
}

const UserMobileDrawer = withStyles(styles)(SimpleBottomNavigation)
const mapStateToProps = (state) => {
  return {
    selected: !!state.user.selected && !!state.user.selected._id,
  }
}
export default connect(mapStateToProps, { })(UserMobileDrawer)
