import React from 'react';
import Button from '@material-ui/core/Button';

interface AddButtonProps {
  action: () => void;
}

export default function AddButton(props: AddButtonProps) {
  return (
    <Button onClick={props.action} variant="contained" color="primary">
      登録
    </Button>
  );
}
