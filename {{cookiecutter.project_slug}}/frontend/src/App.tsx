import React, { FC } from 'react';
import { Routes } from './Routes';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  app: {
    textAlign: 'center',
  },
  header: {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
  },
}));

const App: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <header className={classes.header}>
        <Routes />
      </header>
    </div>
  );
};

export default App;
