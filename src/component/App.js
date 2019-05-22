import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import TodoCounter from './TodoCounter';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import teal from '@material-ui/core/colors/teal';

const styles = {
  appBar: {
    backgroundColor: teal['A700']
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [{ title: 'タスクその1', id: 0 }],
      uniqueId: 1
    };
  }

  addTodo = title => {
    const { tasks, uniqueId } = this.state;
    const newTask = { title: title, id: uniqueId };
    const newTasks = tasks.concat(newTask);

    this.setState({ tasks: newTasks, uniqueId: uniqueId + 1 });
  };

  clearTodo = () => {
    this.setState({ tasks: [], uniqueId: 0 });
  };

  handleClick = () => {
    this.setState({ tasks: [], uniqueId: 1 });
  };

  render() {
    const { tasks, uniqueId } = this.state;
    const { classes } = this.props;

    return (
      <div>
        <CssBaseline />
        <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Todo App
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container>
          <Grid item xs={6}>
            <TodoInput addTodo={this.addTodo} clearTodo={this.clearTodo} />
            <TodoList tasks={tasks} />
          </Grid>
          <Grid item xs={4}>
            <TodoCounter count={tasks.length} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(App);
