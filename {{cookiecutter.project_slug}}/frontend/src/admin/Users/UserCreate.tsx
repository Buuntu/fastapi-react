import React, { FC } from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  EmailField,
  PasswordInput,
  BooleanInput,
} from 'react-admin';

export const UserCreate: FC = (props) => (
  <Create {...props}>
    <SimpleForm>
      <EmailField source="email" />
      <TextInput source="first_name" />
      <TextInput source="last_name" />
      <PasswordInput source="password" />
      <BooleanInput source="is_superuser" />
      <BooleanInput source="is_active" />
    </SimpleForm>
  </Create>
);
