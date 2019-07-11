import React from 'react';
import Button from '@material-ui/core/Button';

interface AddButtonProps {
  item: any;
  action: (item: any) => void;
}

const AddButton: React.FC<AddButtonProps> = props => {
  const { item, action } = props;

  return (
    <Button onClick={e => action(item)} variant="contained" color="primary">
      登録
    </Button>
  );
};

export default AddButton;
