import React, { useState } from 'react';
import AddButton from './AddButton';
import DeleteButton from './DeleteButton';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    todoInput: {
      padding: 16
    },
    input: {
      marginRight: 16,
      width: 300
    }
  })
);

interface TodoInputProps {
  addTodo: (title: string) => void;
  clearCheckedTodo: () => void;
}

export default function TodoInput(props: TodoInputProps) {
  const { addTodo, clearCheckedTodo } = props;
  const [inputValue, setInputValue] = useState<string>('');
  const classes = useStyles({});

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
      <AddButton action={handleAddTodo} />
      <DeleteButton action={clearCheckedTodo} />
    </div>
  );
}
