import { Reducer } from 'redux';
import { TaskAction, TaskActionTypes } from '../actions/tasks';

export interface Task {
  content: string;
  checked: boolean;
}

export interface TaskState {
  inputValue: string;
  tasks: Task[];
}

export const initialState: TaskState = {
  inputValue: '',
  tasks: [{ content: 'タスクその1', checked: false }]
};

const tasksReducer: Reducer<TaskState, TaskAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case TaskActionTypes.ADD_TASK: {
      if (state.inputValue === '') {
        return state;
      }

      const newTask = {
        content: state.inputValue,
        checked: false
      };

      return {
        ...state,
        inputValue: '',
        tasks: state.tasks.concat(newTask)
      };
    }

    case TaskActionTypes.INPUT_TASK: {
      return {
        ...state,
        inputValue: action.payload.content
      };
    }

    case TaskActionTypes.CHECK_TASK: {
      let tasks = [...state.tasks];
      tasks[action.payload.taskId].checked = action.payload.checked;

      return {
        ...state,
        tasks: tasks
      };
    }

    case TaskActionTypes.CLEAR_CHECKED_TASK: {
      const nonSelectedTasks = state.tasks.filter(
        (task, i) => task.checked === false
      );

      return {
        ...state,
        tasks: nonSelectedTasks
      };
    }

    default:
      return state;
  }
};

export default tasksReducer;
