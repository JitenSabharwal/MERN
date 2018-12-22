import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
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
    this.setState({ value })
    this.props.handleChange()
  };

  render () {
    const { classes } = this.props
    const { value } = this.state

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label='Favorites' icon={<TextFormat />} />
        <BottomNavigationAction label='Recents' icon={<TableChart />} />
      </BottomNavigation>
    )
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default withStyles(styles)(SimpleBottomNavigation)
