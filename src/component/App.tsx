import React, { useState, useEffect } from 'react';
import axiosbase from 'axios';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Header from './Header';
import Sidebar, { drawerWidth } from './Sidebar';
import TodoInput from './TodoInput';
import { TodoItemProps } from './TodoItem';
import TodoCounter from './TodoCounter';
import CheckBoxList from './CheckBoxList';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    app: {
      paddingLeft: drawerWidth
    }
  })
);

export default function App() {
  const initialTasks = [{ title: 'タスクその1', checked: false }];
  const [tasks, setTasks] = useState<TodoItemProps[]>(initialTasks);
  const [screenNames, setScreenNames] = useState<string[]>([]);
  const classes = useStyles({});

  // constructor
  useEffect(() => {
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
      .then(res => res.data.map(screen => screen.name))
      .then(names => setScreenNames(names));
  }, []);

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
      <Sidebar screenNames={screenNames} />
      <Grid container className={classes.app}>
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
}
