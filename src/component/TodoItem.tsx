// 今はもう使っていない !!
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export interface TodoItemProps {
  title: string;
  checked: boolean;
}

const TodoItem: React.FC<TodoItemProps> = props => {
  const { title } = props;

  return (
    <ListItem button>
      <ListItemText primary={title} />
    </ListItem>
  );
};

export default TodoItem;
