import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Login } from '../views';

it('Login renders correctly', () => {
  const login = render(<Login />);
  expect(login.getByText('Email')).toBeInTheDocument();
  expect(login.getByText('Password')).toBeInTheDocument();
  expect(login.getByText('Login')).toBeInTheDocument();
});
