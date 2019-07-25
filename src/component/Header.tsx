import React from 'react';
import axiosbase from 'axios';
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

interface HeaderStates {
  screenNames: string[];
}

class Header extends React.Component<HeaderProps, HeaderStates> {
  constructor(props) {
    super(props);
    this.state = {
      screenNames: []
    };
  }

  componentDidMount() {
    // 参考: https://t-kojima.github.io/2018/06/19/0016-xhr-fetch-to-axios/
    const axios = axiosbase.create({
      baseURL: 'http://localhost:4000',
      headers: {
        'Content-Type': 'application/json'
      },
      responseType: 'json'
    });

    axios
      .get('/api/v1/screens/index')
      .then(res => res.data)
      .then(screens => screens.map(screen => screen.name))
      .then(names => this.setState({ screenNames: names }));
  }

  render() {
    const { classes } = this.props;

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
            {this.state.screenNames.map((name, index) => (
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
  }
}

export default withStyles(styles)(Header);
