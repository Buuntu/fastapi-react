import React, { FC } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { isAuthenticated } from '../utils/auth';

type PrivateRouteType = {
  component: React.ComponentType<any>;
  path?: string | string[];
};

export const PrivateRoute: FC<PrivateRouteType> = ({
  component,
  ...rest
}: any) => (
  <Route
    {...rest}
    render={(props: any) =>
      isAuthenticated() === true ? (
        React.createElement(component, props)
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);
