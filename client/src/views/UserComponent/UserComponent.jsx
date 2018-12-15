import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Hidden } from '@material-ui/core'
import UserTable from './components/UserTable'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: '98vh',
    width: '100%',
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class UserComponent extends React.Component {
  state = {
    spacing: '16',
    editing: false
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  render() {
    return (
      <Grid container spacing={16}>
        <Hidden smDown>
          <Grid item md={4}>
            <UserTable />
          </Grid>
          <Grid item md={8}>
            <UserTable />
          </Grid>
        </Hidden>
        <Hidden smUp>
          {this.state.editing ?
            (<Grid item xs={12}>
              <UserTable />
            </Grid>)
            :
            (<Grid item xs={12}>
              <UserTable />
            </Grid>)
          }

        </Hidden>
      </Grid>
    );
  }
}

UserComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserComponent);