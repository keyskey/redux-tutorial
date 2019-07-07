import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import teal from '@material-ui/core/colors/teal';

const styles = {
  appBar: {
    backgroundColor: teal['A700']
  }
};

interface HeaderProps {
  classes: any;
}

const Header = (props: HeaderProps) => {
  const { classes } = props;

  return (
    <AppBar className={classes.appBar} position="static">
      <Toolbar>
        <Typography variant="title" color="inherit">
          Todo App
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Header);
