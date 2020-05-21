import React, { FC } from 'react';
import { fetchUtils, Admin as ReactAdmin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

import { UserList, UserEdit, UserCreate } from './Users';

const fetchJson = (url: string, options: any = {}) => {
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
  }
  // add your own headers here
  options.headers.set('X-Content-Range', '0-9/1');
  return fetchUtils.fetchJson(url, options);
}

const dataProvider = simpleRestProvider('api/v1');


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
