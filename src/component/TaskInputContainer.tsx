import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TodoInput from './TodoInput';
import TodoCounter from './TodoCounter';
import { TodoItemProps } from './TodoItem';
import CheckBoxList from './CheckBoxList';

export default function TaskInputContainer() {
  const initialTasks = [{ title: 'タスクその1', checked: false }];
  const [tasks, setTasks] = useState<TodoItemProps[]>(initialTasks);

  const addTodo = (title: string): void => {
    if (title === '') {
      return;
    }

    const newTask = { title: title, checked: false };
    const newTasks = tasks.concat(newTask);

    setTasks(newTasks);
  };

  const checkTodo = (taskId: number, checked: boolean): void => {
    let checkedTodos = [...tasks];
    checkedTodos[taskId].checked = checked;

    setTasks(checkedTodos);
  };

  const clearCheckedTodo = (): void => {
    const nonSelectedTodos = tasks.filter(task => task.checked === false);

    setTasks(nonSelectedTodos);
  };

  return (
    <Grid container>
      <Grid item xs={6}>
        <TodoInput addTodo={addTodo} clearCheckedTodo={clearCheckedTodo} />
        <CheckBoxList tasks={tasks} checkTodo={checkTodo} />
      </Grid>
      <Grid item xs={4}>
        <TodoCounter count={tasks.length} />
      </Grid>
    </Grid>
  );
}
