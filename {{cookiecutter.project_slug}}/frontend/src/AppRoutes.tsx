import { Route, Routes } from 'react-router-dom';
import { Box, styled } from '@mui/system';
import React, { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Admin } from './admin';
import { Home, Login, SignUp } from './views';
import { logout } from './utils';

const AppContainer = styled(Box)(() => ({
  textAlign: 'center'
}));

const Header = styled('header')(() => ({
  backgroundColor: '#282c34',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 'calc(10px + 2vmin)',
  color: 'white'
}));

const LogoutComponent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    navigate('/');
  }, []);

  return <></>;
};

const App = ({ children }: { children: ReactNode }) => {
  return (
    <AppContainer>
      <Header>{children}</Header>
    </AppContainer>
  );
};

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/admin' element={<Admin />} />
      <Route path='/'>
        <Route
          path='/login'
          element={
            <App>
              <Login />
            </App>
          }
        />
        <Route
          path='/signup'
          element={
            <App>
              <SignUp />
            </App>
          }
        />
        <Route
          path='/logout'
          element={
            <App>
              <LogoutComponent />
            </App>
          }
        />
        <Route
          path='/'
          element={
            <App>
              <Home />
            </App>
          }
        />
      </Route>
    </Routes>
  );
};
