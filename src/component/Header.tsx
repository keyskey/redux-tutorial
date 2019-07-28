import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import teal from '@material-ui/core/colors/teal';
import { drawerWidth } from './Sidebar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      backgroundColor: teal['A700'],
      paddingLeft: drawerWidth
    }
  })
);

export default function Header() {
  const classes = useStyles({});

  return (
    <>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h5" color="inherit">
            Todo App
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
