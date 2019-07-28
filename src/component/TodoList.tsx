import React from 'react';
import TodoItem, { TodoItemProps } from './TodoItem';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    todoList: {
      paddingLeft: 0,
      width: 250
    }
  })
);

interface TodoListProps {
  tasks: TodoItemProps[];
  classes: any;
}

export default function TodoList(props: TodoListProps) {
  const todoItems = props.tasks.map((task, index) => {
    return <TodoItem {...task} key={index} />;
  });

  const classes = useStyles({});

  return (
    <div>
      <ul className={classes.todoList}>{todoItems}</ul>
    </div>
  );
}
