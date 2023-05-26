import React, { useEffect, useState } from 'react';
import { Box, styled } from '@mui/system';
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  TextField
} from '@mui/material';
import { Alert } from '@mui/lab';
import { useNavigate } from 'react-router';
import { redirect } from 'react-router-dom';
import { isAuthenticated, login } from '../utils/auth';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import FaceIcon from '@mui/icons-material/Face';

const FormContainer = styled(Paper)(() => ({}));
const MarginContainer = styled(Grid)(() => ({}));
const ButtonText = styled(Button)(() => ({}));

const Redirect = () => {
  useEffect(() => {
    redirect('/');
  });
  return <></>;
};

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = async () => {
    setError('');
    try {
      const data = await login(email, password);

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
  };

  return isAuthenticated() ? (
    <Redirect />
  ) : (
    <FormContainer sx={{ padding: '16px' }}>
      <MarginContainer container spacing={8} alignItems='flex-end'>
        <Grid item={true}>
          <FaceIcon />
        </Grid>
        <Grid item={true} md={true} sm={true} xs={true}>
          <TextField
            id='email'
            label='Email'
            type='email'
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.currentTarget.value)
            }
            fullWidth={true}
            autoFocus={true}
            required={true}
          />
        </Grid>
      </MarginContainer>
      <Box>
        <Grid item={true}>
          <FingerprintIcon />
        </Grid>
        <Grid item={true} md={true} sm={true} xs={true}>
          <TextField
            id='password'
            label='Password'
            type='password'
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.currentTarget.value)
            }
            fullWidth={true}
            required={true}
          />
        </Grid>
      </Box>
      <MarginContainer
        container
        spacing={8}
        alignItems='flex-end'
      ></MarginContainer>
      <br />
      <MarginContainer container alignItems='center'>
        {error && (
          <Grid item={true}>
            <Alert severity='error'>{error}</Alert>
          </Grid>
        )}
      </MarginContainer>
      <MarginContainer
        container
        alignItems='center'
        justifyContent='space-between'
      >
        <Grid item={true}>
          <FormControlLabel
            control={<Checkbox color='primary' />}
            label='Remember me'
          />
        </Grid>
        <Grid item={true}>
          <ButtonText
            disableFocusRipple
            disableRipple
            variant='text'
            color='primary'
          >
            Forgot password ?
          </ButtonText>
        </Grid>
      </MarginContainer>
      <MarginContainer
        container
        justifyContent='center'
        sx={{ marginTop: '10px' }}
      >
        <ButtonText
          variant='outlined'
          color='primary'
          onClick={() => navigate('/signup')}
        >
          Sign Up
        </ButtonText>
        <ButtonText variant='outlined' color='primary' onClick={handleSubmit}>
          Login
        </ButtonText>
      </MarginContainer>
    </FormContainer>
  );
};
