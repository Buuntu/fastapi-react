// in src/users.js
import React, { FC } from 'react';
import { List, Datagrid, TextField, EmailField, EditButton } from 'react-admin';

export const UserList: FC = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="username" />
      <EmailField source="email" />
      <TextField source="phone" />
      <EditButton />
    </Datagrid>
  </List>
);
