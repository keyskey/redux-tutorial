import React, { useState } from 'react';
import DeleteButton from './DeleteButton';
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
  }
};

interface TodoInputProps {
  addTodo: (title: string) => void;
  clearCheckedTodo: () => void;
  classes: any;
}

const TodoInput: React.FC<TodoInputProps> = props => {
  const { addTodo, clearCheckedTodo, classes } = props;
  const [inputValue, setInputValue] = useState<string>('');

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    addTodo(inputValue);
    setInputValue('');
  };

  return (
    <div className={classes.todoInput}>
      <Input
        className={classes.input}
        onChange={handleInput}
        value={inputValue}
      />
      <Button onClick={handleAddTodo} variant="contained" color="primary">
        登録
      </Button>
      <DeleteButton clearCheckedTodo={clearCheckedTodo} />
    </div>
  );
};

export default withStyles(styles)(TodoInput);
