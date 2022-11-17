/* eslint-disable @typescript-eslint/no-unused-vars */

// NPM Modules
import { Box, Button, TextField } from '@mui/material';
import axios, { AxiosResponse } from 'axios';
import $ from 'jquery';
import * as React from 'react';

export default class RegisterForm extends React.Component {
  private async userRegister(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    passwordConfirm: string
  ) {
    console.log('Begin capture register data.');
    // @ts-ignore-next-line eslint-ignore-next-line
    const res: AxiosResponse = await axios({
      method: 'post',
      url: 'https://api.semlinks.app/v1/account/register/',
      data: {
        email,
        password
      }
    })
      .then((res) => {
        console.log('login success\n', res.statusText);
        window.setTimeout(() => {
          location.assign('/');
        }, 3000);
      })
      .catch((error) => {
        console.log('Error Received:\n', error);
      });
    return res;
  }

  private async submitLogin() {
    const email: string = $('#email').val().toString();
    const password: string = $('#password').val().toString();
    return await this.userLogin(email, password);
  }

  render() {
    return (
      <Box
        sx={{
          width: 500,
          maxWidth: '100%'
        }}
      >
        <form id="login-form">
          <TextField id="email" className="form_input" fullWidth label="Email" />
          <TextField id="password" className="form_input" fullWidth label="Password" />
          <Button
            id="submit"
            className="form_btn"
            fullWidth
            variant="contained"
            onClick={() => {
              this.submitLogin();
            }}
          >
            Login
          </Button>
        </form>
      </Box>
    );
  }
}
