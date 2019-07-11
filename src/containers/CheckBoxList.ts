import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { checkTask } from '../actions/tasks';
import { TaskState } from '../reducers/tasks';
import CheckBoxList from '../component/CheckBoxList';

interface StateProps {
  items: TaskState['tasks'];
}

interface DispatchProps {
  checkItem: typeof checkTask;
}

const mapStateToProps = (state: TaskState): StateProps => ({
  items: state.tasks
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  checkItem: (taskId, checked) => dispatch(checkTask(taskId, checked))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckBoxList);
