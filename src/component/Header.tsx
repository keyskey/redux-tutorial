import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import teal from '@material-ui/core/colors/teal';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Drawer, List } from '@material-ui/core';

export const drawerWidth = 140;
const styles = {
  appBar: {
    backgroundColor: teal['A700'],
    paddingLeft: drawerWidth
  },
  drawerList: {
    width: drawerWidth
  },
  drawerListItemText: {
    textAlign: 'center' as 'center'
  }
};

interface HeaderProps {
  classes: any;
}

const Header: React.FC<HeaderProps> = props => {
  const { classes } = props;
  const screenNames = ['Home', 'Profile'];

  return (
    <>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Todo App
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" anchor="left">
        <List className={classes.drawerList}>
          {screenNames.map((name, index) => (
            <ListItem button key={index}>
              <ListItemText
                className={classes.drawerListItemText}
                primary={name}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default withStyles(styles)(Header);
