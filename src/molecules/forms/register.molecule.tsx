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
        firstName,
        lastName,
        email,
        password,
        passwordConfirm
      }
    })
      .then((res) => {
        console.log('register success\n', res.statusText);
        window.setTimeout(() => {
          location.assign('/');
        }, 3000);
      })
      .catch((error) => {
        console.log('Error Received:\n', error);
      });
    return res;
  }

  private async submitRegister() {
    const firstName: string = $('#firstName').val().toString();
    const lastName: string = $('#lastName').val().toString();
    const email: string = $('#email').val().toString();
    const password: string = $('#password').val().toString();
    const passwordConfirm: string = $('#passwordConfirm').val().toString();
    return await this.userRegister(firstName, lastName, email, password, passwordConfirm);
  }

  render() {
    return (
      <Box
        sx={{
          width: 500,
          maxWidth: '100%'
        }}
      >
        <form id="register-form">
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
