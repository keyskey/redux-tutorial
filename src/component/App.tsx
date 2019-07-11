import React from 'react';
import Header from './Header';
import TodoInput from '../containers/TodoInput';
import TodoCounter from '../containers/TodoCounter';
import CheckBoxList from '../containers/CheckBoxList';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

const App: React.FC<{}> = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container>
        <Grid item xs={6}>
          <TodoInput />
          <CheckBoxList />
        </Grid>
        <Grid item xs={4}>
          <TodoCounter />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
