import React, { FC, useState } from 'react';
import { BACKEND_URL } from '../config';

const Home:FC = () => {
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState<string>('');

  const getMessage = () => {
    fetch(BACKEND_URL)
      .then((response) => response.json())
      .then(data => {
        if (data.message) {
          setMessage(data.message);
        } else {
          setError(`Failed to get message from ${data}`);
        }
      })
      .catch(error => setError(error));
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {!message && !error && (
          <a className="App-link" onClick={() => getMessage()}>Click to make request to backend</a>
        )}
        {message && (
          <p><code>{message}</code></p>
        )}
        {error && (
          <p>Error: <code>{error}</code></p>
        )}
      </header>
    </div>
  );
}

export default Home;
