import React from 'react';
import Header from './Header';
import TodoInput from './TodoInput';
import { TodoItemProps } from './TodoItem';
import TodoCounter from './TodoCounter';
import CheckBoxList from './CheckBoxList';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

interface AppState {
  tasks: TodoItemProps[];
}

class App extends React.Component<{}, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          title: 'タスクその1',
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

    this.setState({ tasks: nonSelectedTodos });
  };

  render() {
    const { tasks } = this.state;

    return (
      <div>
        <CssBaseline />
        <Header />
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

export default App;
