import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TodoInput from './TodoInput.tsx';
import TodoItemProps from './TodoItem.tsx';
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
      ]
    };
  }

  addTodo = (title: string): void => {
    const newTask = { title: title, checked: false };
    const newTasks = this.state.tasks.concat(newTask);

    this.setState({ tasks: newTasks });
  };

  clearTodo = (): void => {
    this.setState({ tasks: [] });
  };

  checkTodo = (taskId: number, checked: boolean): void => {
    let checkedTodos = [...this.state.tasks];
    checkedTodos[taskId].checked = checked;

    this.setState({ tasks: checkedTodos });
  };

  clearCheckedTodo = (): void => {
    const nonSelectedTodos = this.state.tasks.filter(
      task => task.checked === false
    );
    const renumberedTodos = nonSelectedTodos.map((todo, index) =>
      Object.assign({}, todo, { id: index })
    ); // 選択したTodoの削除後はtask.idが連番になっていないので貼り直す

    this.setState({ tasks: renumberedTodos });
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
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(App);
