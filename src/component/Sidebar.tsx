import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Drawer, List } from '@material-ui/core';

export const drawerWidth = 140;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawerList: {
      width: drawerWidth
    },
    drawerListItemText: {
      textAlign: 'center' as 'center'
    }
  })
);

export interface SidebarProps {
  screenNames: string[];
}

export default function Sidebar(props: SidebarProps) {
  const classes = useStyles({});

  return (
    <Drawer variant="permanent" anchor="left">
      <List className={classes.drawerList}>
        {props.screenNames.map((name, index) => (
          <ListItem button key={index}>
            <ListItemText
              className={classes.drawerListItemText}
              primary={name}
            />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
