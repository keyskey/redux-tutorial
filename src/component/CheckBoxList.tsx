import React from 'react';
import { TodoItemProps } from './TodoItem.tsx';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  checkBoxList: {
    paddingLeft: 15
  }
};

interface CheckBoxListProps {
  tasks: TodoItemProps[];
  classes: any;
  checkTodo: (taskId: number, checked: boolean) => void;
}

const CheckBoxList = (props: CheckBoxListProps) => {
  const { tasks, classes, checkTodo } = props;

  const handleChange = (taskId: number) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    checkTodo(taskId, event.target.checked);
  };

  const checkboxes = tasks.map((task, index) => {
    return (
      <FormControlLabel
        control={
          <Checkbox checked={task.checked} onChange={handleChange(index)} />
        }
        label={task.title}
        key={index}
      />
    );
  });

  return <FormGroup className={classes.checkBoxList}>{checkboxes}</FormGroup>;
};

export default withStyles(styles)(CheckBoxList);
