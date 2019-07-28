import React from 'react';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    clearButton: {
      marginLeft: 5
    }
  })
);

interface DeleteButtonProps {
  action: () => void;
}

export default function DeleteButton(props: DeleteButtonProps) {
  const classes = useStyles({});

  return (
    <Button
      className={classes.clearButton}
      onClick={props.action}
      variant="contained"
      color="secondary"
    >
      選択したタスクをクリア
    </Button>
  );
}
