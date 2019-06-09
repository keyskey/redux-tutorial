import React from 'react';
import { TodoItem, TodoItemProps } from './TodoItem.tsx';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  todoList: {
    paddingLeft: 0,
    width: 250
  }
};

interface TodoListProps {
  tasks: TodoItemProps[];
  classes: any;
}

const TodoList = (props: TodoListProps) => {
  const { tasks, classes } = props;
  const todoItems = tasks.map((task, index) => {
    return <TodoItem {...task} key={index} />;
  });

  return (
    <div>
      <ul className={classes.todoList}>{todoItems}</ul>
    </div>
  );
};

export default withStyles(styles)(TodoList);
