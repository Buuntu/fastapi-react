import React, { FC } from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  BooleanInput
} from 'react-admin';

const ToDoCreate: FC = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="description" />
      <BooleanInput source="is_done" />
    </SimpleForm>
  </Create>
);
export default ToDoCreate