import React from 'react';
import { TodoItemProps } from './TodoItem';
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

const CheckBoxList: React.FC<CheckBoxListProps> = props => {
  const { tasks, classes, checkTodo } = props;
  const checkboxes = tasks.map((task, index) => {
    return (
      <FormControlLabel
        control={
          <Checkbox
            checked={task.checked}
            onChange={e => checkTodo(index, e.target.checked)}
          />
        }
        label={task.title}
        key={index}
      />
    );
  });

  return <FormGroup className={classes.checkBoxList}>{checkboxes}</FormGroup>;
};

export default withStyles(styles)(CheckBoxList);
