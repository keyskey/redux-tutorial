import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

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

const initialInput = 'タスクその1';

class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: initialInput
    };
  }

  handleChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  handleClickAddTodo = () => {
    const title = this.state.inputValue;
    this.props.addTodo(title);
  };

  handleClickClearTodo = () => {
    this.props.clearTodo();
  };

  render() {
    const { classes } = this.props;

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
          onClick={this.handleClickClearTodo}
          variant="contained"
          color="secondary"
        >
          クリア
        </Button>
      </div>
    );
  }
}

TodoInput.propTypes = {
  inputValue: PropTypes.string
};

export default withStyles(styles)(TodoInput);
