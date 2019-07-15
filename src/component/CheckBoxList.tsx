import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  checkBoxList: {
    paddingLeft: 15
  }
};

export interface Item {
  content: string;
  checked: boolean;
}

export interface CheckBoxListProps {
  items: Item[];
  classes: any;
  checkItem: (itemId: number, checked: boolean) => void;
}

const CheckBoxList: React.FC<CheckBoxListProps> = props => {
  const { items, classes, checkItem } = props;
  const checkboxes = items.map((item, index) => {
    return (
      <FormControlLabel
        control={
          <Checkbox
            checked={item.checked}
            onChange={e => checkItem(index, e.target.checked)}
          />
        }
        label={item.content}
        key={index}
      />
    );
  });

  return <FormGroup className={classes.checkBoxList}>{checkboxes}</FormGroup>;
};

export default withStyles(styles)(CheckBoxList);
