import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TodoInput from './TodoInput.tsx';
import TodoItemProps from './TodoItem.tsx';
import TodoList from './TodoList.tsx';
import TodoCounter from './TodoCounter.tsx';
import CheckBoxList from './CheckBoxList.tsx';
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

interface AppProps {
  classes: any; // CSSのクラス名なので厳密に型宣言せずとも良いかなと
}

interface AppState {
  tasks: TodoItemProps[];
  uniqueId: number;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          title: 'タスクその1',
          id: 0,
          checked: false
        }
      ],
      uniqueId: 1
    };
  }

  addTodo = (title: string): void => {
    const newTask = { title: title, id: this.state.uniqueId, checked: false };
    const newTasks = this.state.tasks.concat(newTask);

    this.setState({ tasks: newTasks, uniqueId: this.state.uniqueId + 1 });
  };

  clearTodo = (): void => {
    this.setState({ tasks: [], uniqueId: 0 });
  };

  checkTodo = (taskId: number, checked: boolean): void => {
    const checkedTodos = this.state.tasks.map(task => {
      if (task.id === taskId) {
        return Object.assign(task, { checked: checked });
      } else {
        return task;
      }
    });

    this.setState({ tasks: checkedTodos });
  };

  clearCheckedTodo = (): void => {
    const nonSelectedTodos = this.state.tasks.filter(
      task => task.checked == false
    );
    const nextUniqueId = nonSelectedTodos.length;
    const renumberedTodos = nonSelectedTodos.map((todo, index) =>
      Object.assign(todo, { id: index })
    ); // 選択したTodoの削除後はtask.idが連番になっていないので貼り直す

    this.setState({ tasks: renumberedTodos, uniqueId: nextUniqueId });
  };

  render() {
    // StateもPropsも一つずつしか必要ないが, 親コンポーネントはStateが増えやすいので敢えて分割代入のままにしている
    const { tasks } = this.state;
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
            <TodoInput
              addTodo={this.addTodo}
              clearCheckedTodo={this.clearCheckedTodo}
            />
            <CheckBoxList tasks={tasks} checkTodo={this.checkTodo} />
          </Grid>
          <Grid item xs={4}>
            <TodoCounter count={tasks.length} />
            <TodoList tasks={tasks} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(App);
