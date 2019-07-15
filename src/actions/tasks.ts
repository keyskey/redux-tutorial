export enum TaskActionTypes {
  ADD_TASK = 'ADD_TASK',
  INPUT_TASK = 'INPUT_TASK',
  CHECK_TASK = 'CHECK_TASK',
  CLEAR_CHECKED_TASK = 'CLEAR_CHECKED_TASK'
}

export interface TaskAction {
  type: TaskActionTypes;
  payload?: {
    content?: string;
    taskId?: number;
    checked?: boolean;
  };
}

export const addTask = (): TaskAction => ({
  type: TaskActionTypes.ADD_TASK
});

export const inputTask = (content: string): TaskAction => ({
  type: TaskActionTypes.INPUT_TASK,
  payload: {
    content: content
  }
});

export const checkTask = (taskId: number, checked: boolean): TaskAction => ({
  type: TaskActionTypes.CHECK_TASK,
  payload: {
    taskId: taskId,
    checked: checked
  }
});

export const clearCheckedTask = (): TaskAction => ({
  type: TaskActionTypes.CLEAR_CHECKED_TASK
});
