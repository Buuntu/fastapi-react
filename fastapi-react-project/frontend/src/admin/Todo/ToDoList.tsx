import React, { FC } from 'react';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
} from 'react-admin';

const ToDoList: FC = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="description" />
      <TextField source="is_done" />
      <EditButton />
    </Datagrid>
  </List>
);
export default ToDoList