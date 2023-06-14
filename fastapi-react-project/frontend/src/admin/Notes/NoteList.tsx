import React, { FC } from 'react';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
} from 'react-admin';

export const NoteList: FC = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="description" />
      <EditButton />
    </Datagrid>
  </List>
);
