import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export interface TodoItemProps {
  title: string;
  checked: boolean;
}

export default function TodoItem(props: TodoItemProps) {
  return (
    <ListItem button>
      <ListItemText primary={props.title} />
    </ListItem>
  );
}
