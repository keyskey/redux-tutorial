import React from 'react';
import { TodoItemProps } from './TodoItem';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    checkBoxList: {
      paddingLeft: 15
    }
  })
);

interface CheckBoxListProps {
  tasks: TodoItemProps[];
  checkTodo: (taskId: number, checked: boolean) => void;
}

export default function CheckBoxList(props: CheckBoxListProps) {
  const classes = useStyles({});

  const checkboxes = props.tasks.map((task, index) => {
    return (
      <FormControlLabel
        control={
          <Checkbox
            checked={task.checked}
            onChange={e => props.checkTodo(index, e.target.checked)}
          />
        }
        label={task.title}
        key={index}
      />
    );
  });

  return <FormGroup className={classes.checkBoxList}>{checkboxes}</FormGroup>;
}
