import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { inputTask } from '../actions/tasks';
import { TaskState } from '../reducers/tasks';
import TodoInput from '../component/TodoInput';

interface StateProps {
  inputValue: string;
}

interface DispatchProps {
  inputItem: typeof inputTask;
}

const mapStateToProps = (state: TaskState): StateProps => ({
  inputValue: state.inputValue
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  inputItem: title => dispatch(inputTask(title))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoInput);
