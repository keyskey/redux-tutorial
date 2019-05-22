import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const TodoItem = props => {
  const { title, id } = props;

  return (
    <ListItem button>
      <ListItemText primary={title} />
    </ListItem>
  );
};

TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number
};

export default TodoItem;
