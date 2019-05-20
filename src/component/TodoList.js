import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  todoList: {
    paddingLeft: 0,
    width: 400,
  },
};

class TodoList extends React.Component {
  render() {
    const { tasks, classes } = this.props;
    const todoItems = tasks.map(task => {
      return <TodoItem {...task} key = {task.id} />;
    });

    return (
      <div>
        <ul className={classes.todoList}>
          {todoItems}
        </ul>
      </div>
    );
  }
}

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default withStyles(styles)(TodoList);
