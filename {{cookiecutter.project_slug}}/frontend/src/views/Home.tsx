import React, { FC, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { BACKEND_URL } from '../config';

const useStyles = makeStyles((theme) => ({
  link: {
    color: '#61dafb',
  },
}));

export const Home: FC = () => {
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState<string>('');
  const classes = useStyles();

  const getMessage = () => {
    fetch(BACKEND_URL)
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          setMessage(data.message);
        } else {
          setError(`Failed to get message from ${data}`);
        }
      })
      .catch((error) => setError(error));
  };

  return (
    <>
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      {!message && !error && (
        <a className={classes.link} onClick={() => getMessage()}>
          Click to make request to backend
        </a>
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
      <a className={classes.link} href="/admin">
        Go to admin dashboard
      </a>
    </>
  );
};
