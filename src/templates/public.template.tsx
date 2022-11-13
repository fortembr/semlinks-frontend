import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Container } from '@mui/material';

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
