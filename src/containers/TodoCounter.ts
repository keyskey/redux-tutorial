import { connect } from 'react-redux';
import { TaskState } from '../reducers/tasks';
import TodoCounter from '../component/TodoCounter';

interface StateProps {
  count: number;
}

const mapStateToProps = (state: TaskState): StateProps => ({
  count: state.tasks.length
});

export default connect(mapStateToProps)(TodoCounter);
