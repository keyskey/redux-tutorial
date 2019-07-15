import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addTask } from '../actions/tasks';
import AddButton from '../component/AddButton';

interface DispatchProps {
  action: typeof addTask;
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  action: () => dispatch(addTask())
});

export default connect(
  null,
  mapDispatchToProps
)(AddButton);
