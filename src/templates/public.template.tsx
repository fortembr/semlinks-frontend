// NPM Modules
import * as React from 'react';
import { Box, Container, CssBaseline } from '@mui/material';

interface PageProps {
  children: any;
}

export default class PublicTemplate extends React.Component<PageProps> {
  constructor(props: PageProps) {
    super(props);
  }
  render() {
    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Container maxWidth="sm">
          <main>{this.props.children}</main>
        </Container>
      </Box>
    );
  }
}
