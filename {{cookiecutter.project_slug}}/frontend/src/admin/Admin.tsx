import React, { FC } from 'react';
import { Admin as ReactAdmin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import { UserList, UserEdit, UserCreate } from './Users';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

export const Admin: FC = () => {
  return (
    <ReactAdmin dataProvider={dataProvider}>
      <Resource
        name="users"
        list={UserList}
        edit={UserEdit}
        create={UserCreate}
      />
    </ReactAdmin>
  );
};
