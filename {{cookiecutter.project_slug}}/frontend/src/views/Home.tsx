import React, { FC, useState } from 'react';
import { getMessage } from '../utils/api';
import { isAuthenticated } from '../utils/auth';
import { styled } from '@mui/system';

const Link = styled('a')({
  color: '#61dafb'
});

export const Home: FC = () => {
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState<string>('');

  const queryBackend = async () => {
    try {
      const message = await getMessage();
      setMessage(message);
    } catch (err) {
      setError(String(err));
    }
  };

  return (
    <>
      {!message && !error && (
        <Link href='#' onClick={() => queryBackend()}>
          Click to make request to backend
        </Link>
      )}
      {message && (
        <p>
          <code>{message}</code>
        </p>
      )}
      {error && (
        <p>
          Error: <code>{error}</code>
        </p>
      )}
      <Link href='/admin'>Admin Dashboard</Link>
      <Link href='/protected'>Protected Route</Link>
      {isAuthenticated() ? (
        <Link href='/logout'>Logout</Link>
      ) : (
        <>
          <Link href='/login'>Login</Link>
          <Link href='/signup'>Sign Up</Link>
        </>
      )}
    </>
  );
};
