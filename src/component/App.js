import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { title: 'Todo 1', id: 0 }
      ],
      uniqueId: 1,
    }
  }

  addTodo = (title) => {
    const { tasks, uniqueId } = this.state;
    const newTask = { title: title, id: uniqueId };
    const newTasks = tasks.concat(newTask);

    this.setState({ tasks: newTasks, uniqueId: uniqueId + 1 });
  }

  clearTodo = () => {
    this.setState({tasks: [], uniqueId: 0});
  }

  handleClick = () => {
    this.setState({tasks: [], uniqueId: 1});
  }

  render() {
    const { tasks, uniqueId } = this.state;

    return (
      <div>
        <CssBaseline />
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Todo App
            </Typography>
          </Toolbar>
        </AppBar>
        <TodoInput addTodo={this.addTodo} clearTodo={this.clearTodo}/>
        <TodoList tasks={tasks} />
      </div>
    );
  }
}

export default App;
