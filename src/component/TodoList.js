import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class TodoList extends React.Component {
  render() {
    const { tasks } = this.props;
    const todoItems = tasks.map(task => {
      return <TodoItem {...task} key = {task.id} />;
    });

    return (
      <div>
        <ul style={{ paddingLeft: '0px' }}>
          {todoItems}
        </ul>
      </div>
    );
  }
}

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default TodoList;
