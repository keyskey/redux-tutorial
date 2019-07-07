import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  clearButton: {
    marginLeft: 5
  }
};

interface DeleteButtonProps {
  action: () => void;
  classes: any;
}

const DeleteButton: React.FC<DeleteButtonProps> = props => {
  const { action, classes } = props;

  return (
    <Button
      className={classes.clearButton}
      onClick={action}
      variant="contained"
      color="secondary"
    >
      選択したタスクをクリア
    </Button>
  );
};

export default withStyles(styles)(DeleteButton);
