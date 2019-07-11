import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addTask } from '../actions/tasks';
import { TaskState } from '../reducers/tasks';
import AddButton from '../component/AddButton';

interface StateProps {
  item: string;
}

interface DispatchProps {
  action: typeof addTask;
}

const mapStateToProps = (state: TaskState): StateProps => ({
  item: state.inputValue
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  action: content => dispatch(addTask(content))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddButton);
