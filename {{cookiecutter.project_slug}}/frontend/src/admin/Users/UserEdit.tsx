import React, { FC } from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  PasswordInput,
  BooleanInput,
} from 'react-admin';

export const UserEdit: FC = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="email" />
      <PasswordInput source="password" />
      <BooleanInput source="is_active" />
    </SimpleForm>
  </Edit>
);
