import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export interface TodoItemProps {
  title: string;
  checked: boolean;
}

const TodoItem = (props: TodoItemProps) => {
  const { title } = props;

  return (
    <ListItem button>
      <ListItemText primary={title} />
    </ListItem>
  );
};

export default TodoItem;
