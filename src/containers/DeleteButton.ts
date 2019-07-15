import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { clearCheckedTask } from '../actions/tasks';
import DeleteButton from '../component/DeleteButton';

interface DispatchProps {
  action: typeof clearCheckedTask;
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  action: () => dispatch(clearCheckedTask())
});

export default connect(
  null,
  mapDispatchToProps
)(DeleteButton);
