import React from 'react';
import AddButton from '../containers/AddButton';
import DeleteButton from '../containers/DeleteButton';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

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
  inputValue: string;
  inputItem: (content: string) => void;
  classes: any;
}

const TodoInput: React.FC<TodoInputProps> = props => {
  const { inputValue, inputItem, classes } = props;

  return (
    <div className={classes.todoInput}>
      <Input
        className={classes.input}
        onChange={e => inputItem(e.target.value)}
        value={inputValue}
      />
      <AddButton />
      <DeleteButton />
    </div>
  );
};

export default withStyles(styles)(TodoInput);
