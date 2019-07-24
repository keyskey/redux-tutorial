import React, { useState } from 'react';
import Header, { drawerWidth } from './Header';
import TodoInput from './TodoInput';
import { TodoItemProps } from './TodoItem';
import TodoCounter from './TodoCounter';
import CheckBoxList from './CheckBoxList';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  app: {
    paddingLeft: drawerWidth
  }
};

interface AppProps {
  classes: any;
}

const App: React.FC<AppProps> = props => {
  const { classes } = props;
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
    <>
      <CssBaseline />
      <Header />
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
};

export default withStyles(styles)(App);
