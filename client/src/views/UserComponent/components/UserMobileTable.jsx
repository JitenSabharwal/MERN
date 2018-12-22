import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Checkbox from '@material-ui/core/Checkbox'
import Avatar from '@material-ui/core/Avatar'
import { connect } from 'react-redux'
import { selectUser, deleteUser, deleteAllUsers } from '../../../actions'
import {findUser} from '../../../helpers/util'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
})

class CheckboxListSecondary extends React.Component {
  state = {
    checked: this.props.selected._id ? [this.props.selected._id] : [],
    edit: false,
    delete: false,
  };

  handleToggle = value => () => {
    const { checked } = this.state
    const currentIndex = checked.indexOf(value)
    let newChecked = [...checked]
    const data = findUser(this.props.data, value)
    if (currentIndex === -1) {
      newChecked = [value]
      this.props.selectUser(data[0])
    } else {
      newChecked = []
      this.props.selectUser({})
    }
    this.setState({
      checked: newChecked,
    })
  };

  render () {
    const { classes, data } = this.props
    return (
      <List dense className={classes.root}>
        {data.map(value => (
          <ListItem key={value._id} button>
            <ListItemAvatar>
              <Avatar
                alt={`Avatar n°${1}`}
                src={value.profilePic}
              />
            </ListItemAvatar>
            <ListItemText
              primary={`${value.firstName || ''} ${value.lastName || ''}`}
              secondary={
                <React.Fragment>
                  <Typography component='span' className={classes.inline} color='textPrimary'>
                    {value.birthDate}
                  </Typography>
                  {value.hobbies}
                </React.Fragment>
              }
            />
            <ListItemSecondaryAction>
              <Checkbox
                onChange={this.handleToggle(value._id)}
                checked={this.state.checked.indexOf(value._id) !== -1}
              />
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    )
  }
}

CheckboxListSecondary.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  selectUser: PropTypes.func,
  selected: PropTypes.object,
}
const UserTable = withStyles(styles)(CheckboxListSecondary)

const mapStateToProps = (state) => {
  return {
    data: state.user.list,
    selected: state.user.selected || {},

  }
}

export default connect(mapStateToProps, {selectUser, deleteUser, deleteAllUsers})(UserTable)
