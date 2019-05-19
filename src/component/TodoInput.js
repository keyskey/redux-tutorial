import React from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

class TodoInput extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        inputValue: '',
      }
  }

  handleChange = (event) => {
    this.setState({inputValue: event.target.value})
  }

  handleClickAddTodo = () => {
    const title = this.state.inputValue;
    this.props.addTodo(title);
  }

  handleClickClearTodo = () => {
    this.props.clearTodo();
  }

  render() {
    return (
      <div style={{ padding: '16px 16px 16px 20px' }}>
        <Input onChange={this.handleChange} defaultValue="新規Todo" style={{ marginRight: '16px', width: '300px' }} />
        <Button onClick={this.handleClickAddTodo} variant="contained" color="primary">登録</Button>
        <Button onClick={this.handleClickClearTodo} variant="contained" color="secondary" style={{ marginLeft: '5px' }}>クリア</Button>
      </div>
    );
  }
}

TodoInput.propTypes = {
  inputValue: PropTypes.string.isRequired,
}

export default TodoInput;
