import React, { FC } from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
} from 'react-admin';

export const NoteCreate: FC = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="description" />
    </SimpleForm>
  </Create>
);
