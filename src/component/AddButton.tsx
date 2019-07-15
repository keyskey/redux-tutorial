import React from 'react';
import Button from '@material-ui/core/Button';

interface AddButtonProps {
  action: () => void;
}

const AddButton: React.FC<AddButtonProps> = props => {
  const { action } = props;

  return (
    <Button onClick={action} variant="contained" color="primary">
      登録
    </Button>
  );
};

export default AddButton;
