import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export interface TodoItemProps {
  title: string;
  id: number;
}

// ファイルの最後にTodoItemPropsとまとめてexportしようとすると他のモジュールで読み込めないので, ここだけはinterfaceや関数の宣言時にexportを付けておく
export const TodoItem = (props: TodoItemProps) => {
  return (
    <ListItem button>
      <ListItemText primary={props.title} />
    </ListItem>
  );
};
