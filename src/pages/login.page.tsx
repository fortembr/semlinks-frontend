// NPM Modules
import { Box, Link, Typography } from '@mui/material';
import * as React from 'react';

// Custom Modules
import { LoginForm } from 'molecules/forms';
import { PublicTemplate } from 'templates';
import logo from './../../src/assets/img/logo.png';

export default class LoginPage extends React.Component {
  render() {
    return (
      <PublicTemplate>
        <Box component='main' sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, mt: 50 }}>
          <img className='logo' src={logo} alt='SEM Links Logo' />
          <Typography className='headline-primary' variant='h1'>
            Login
          </Typography>
          <LoginForm />
          <Typography paragraph className='text-center m-20'>
            Don&apos;t have an account? <Link href='/register'>Create an Account.</Link>
            <br />
            <Link href='/forgot-password'>Forgot Password?</Link>
          </Typography>
        </Box>
      </PublicTemplate>
    );
  }
}
