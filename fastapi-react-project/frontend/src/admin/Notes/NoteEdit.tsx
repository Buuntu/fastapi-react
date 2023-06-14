import React, { FC } from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
} from 'react-admin';

export const NoteEdit: FC = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="title" />
      <TextInput source="description" />
    </SimpleForm>
  </Edit>
);
