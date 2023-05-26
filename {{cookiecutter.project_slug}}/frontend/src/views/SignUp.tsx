import React, { useEffect, useState } from 'react';
import { styled } from '@mui/system';
import { Button, Grid, Paper, TextField } from '@mui/material';
import { Alert } from '@mui/lab';
import { redirect } from 'react-router-dom';
import { isAuthenticated, signUp } from '../utils/auth';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import FaceIcon from '@mui/icons-material/Face';
import { useNavigate } from 'react-router';

const FormContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1)
}));

const MarginContainer = styled(Grid)(({ theme }) => ({
  margin: theme.spacing(2)
}));

const ButtonText = styled(Button)(() => ({
  textTransform: 'none'
}));

const Redirect = () => {
  useEffect(() => {
    redirect('/');
  });
  return <></>;
};

export const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = async () => {
    // Password confirmation validation
    if (password !== passwordConfirmation) setError('Passwords do not match');
    else {
      setError('');
      try {
        const data = await signUp(email, password, passwordConfirmation);

        if (data) {
          navigate('/');
        }
      } catch (err) {
        if (err instanceof Error) {
          // handle errors thrown from frontend
          setError(err.message);
        } else {
          // handle errors thrown from backend
          setError(String(err));
        }
      }
    }
  };

  return isAuthenticated() ? (
    <Redirect />
  ) : (
    <FormContainer sx={{ padding: '16px' }}>
      <MarginContainer container spacing={2} alignItems='flex-end'>
        <Grid item>
          <FaceIcon />
        </Grid>
        <Grid item xs>
          <TextField
            id='email'
            label='Email'
            type='email'
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.currentTarget.value)
            }
            fullWidth
            autoFocus
            required
          />
        </Grid>
      </MarginContainer>
      <MarginContainer container spacing={2} alignItems='flex-end'>
        <Grid item>
          <FingerprintIcon />
        </Grid>
        <Grid item xs>
          <TextField
            id='password'
            label='Password'
            type='password'
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.currentTarget.value)
            }
            fullWidth
            required
          />
        </Grid>
      </MarginContainer>
      <MarginContainer container spacing={2} alignItems='flex-end'>
        <Grid item>
          <FingerprintIcon />
        </Grid>
        <Grid item xs>
          <TextField
            id='passwordConfirmation'
            label='Confirm password'
            type='password'
            value={passwordConfirmation}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPasswordConfirmation(e.currentTarget.value)
            }
            fullWidth
            required
          />
        </Grid>
      </MarginContainer>
      {error && (
        <MarginContainer container alignItems='center'>
          <Grid item>
            <Alert severity='error'>{error}</Alert>
          </Grid>
        </MarginContainer>
      )}
      <MarginContainer container justifyContent='center'>
        <Grid item>
          <ButtonText variant='outlined' color='primary' onClick={handleSubmit}>
            Sign Up
          </ButtonText>
        </Grid>
      </MarginContainer>
    </FormContainer>
  );
};
