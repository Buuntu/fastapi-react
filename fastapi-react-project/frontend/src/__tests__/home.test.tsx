import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Home } from '../views/Home';

it('Home renders correctly', () => {
  const home = render(<Home />);
  expect(home.getByText('Admin Dashboard')).toBeInTheDocument();
  expect(home.getByText('Protected Route')).toBeInTheDocument();
  expect(home.getByText('Login')).toBeInTheDocument();
  expect(home.getByText('Sign Up')).toBeInTheDocument();
});
