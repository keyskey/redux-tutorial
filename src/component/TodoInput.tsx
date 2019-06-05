import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

const styles = {
  todoInput: {
    padding: 16
  },
  input: {
    marginRight: 16,
    width: 300
  },
  clearButton: {
    marginLeft: 5
  }
};

interface TodoInputProps {
  initialInput: string;
  classes: any;
  addTodo: (title: string) => void;
  clearTodo: () => void;
  clearCheckedTodo: () => void;
}

interface TodoInputState {
  inputValue: string;
}

class TodoInput extends React.Component<TodoInputProps, TodoInputState> {
  static defaultProps = { initialInput: 'タスクその2' };

  constructor(props) {
    super(props);
    this.state = {
      inputValue: this.props.initialInput
    };
  }

  handleChange = (event: any) => {
    this.setState({ inputValue: event.target.value });
  };

  handleClickAddTodo = () => {
    const title = this.state.inputValue;
    this.props.addTodo(title);
  };

  handleClickClearTodo = () => {
    this.props.clearTodo();
  };

  handleClickClearCheckedTodo = () => {
    this.props.clearCheckedTodo();
  };

  render() {
    const { initialInput, classes } = this.props;

    return (
      <div className={classes.todoInput}>
        <Input
          className={classes.input}
          onChange={this.handleChange}
          defaultValue={initialInput}
        />
        <Button
          onClick={this.handleClickAddTodo}
          variant="contained"
          color="primary"
        >
          登録
        </Button>
        <Button
          className={classes.clearButton}
          onClick={this.handleClickClearCheckedTodo}
          variant="contained"
          color="secondary"
        >
          選択したタスクをクリア
        </Button>
      </div>
    );
  }
}
export default withStyles(styles)(TodoInput);
