import React, { useState } from 'react';
import Header from './Header';
import TodoInput from './TodoInput';
import { TodoItemProps } from './TodoItem';
import TodoCounter from './TodoCounter';
import CheckBoxList from './CheckBoxList';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<TodoItemProps[]>([
    { title: 'タスクその1', checked: false }
  ]);

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
    <>
      <CssBaseline />
      <Header />
      <Grid container>
        <Grid item xs={6}>
          <TodoInput addTodo={addTodo} clearCheckedTodo={clearCheckedTodo} />
          <CheckBoxList tasks={tasks} checkTodo={checkTodo} />
        </Grid>
        <Grid item xs={4}>
          <TodoCounter count={tasks.length} />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
