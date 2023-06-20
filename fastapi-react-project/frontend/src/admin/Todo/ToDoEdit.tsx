import React, { FC } from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  BooleanInput
} from 'react-admin';

const ToDoEdit: FC = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="title" />
      <TextInput source="description" />
      <BooleanInput source="is_done" />
    </SimpleForm>
  </Edit>
);
export default ToDoEdit