// NPM Modules
import { Logout, Settings } from '@mui/icons-material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import {
  AppBar,
  Avatar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  ImageListItem,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography
} from '@mui/material';
import axios, { AxiosResponse } from 'axios';
import * as React from 'react';
import { Link } from 'react-router-dom';

// Custom Modules
import logo from './../../src/assets/img/logo.png';
export interface PageProps {
  children: any;
  pageTitle: string;
}

export interface PageState {
  anchorEl: HTMLElement | null;
  isMenuOpen: boolean;
}

export default class PortalTemplate extends React.Component<PageProps, PageState> {
  private drawerWidth = 240;

  constructor(props: PageProps) {
    super(props);
    this.state = { isMenuOpen: false, anchorEl: null };
  }

  private closeAccountMenu() {
    return this.setState({ anchorEl: null, isMenuOpen: false });
  }
  private openAccountMenu() {
    const element: HTMLElement = document.querySelector('#avatar-icon');
    return this.setState({ anchorEl: element, isMenuOpen: true });
  }
  private handleAccountMenuClick() {
    if (this.state.isMenuOpen) {
      return this.closeAccountMenu();
    } else {
      return this.openAccountMenu();
    }
  }

  render() {
    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position='fixed' sx={{ width: `calc(100% - ${this.drawerWidth}px)`, ml: `${this.drawerWidth}px` }}>
          <Toolbar className='box-header' sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant='h6' noWrap component='div'>
              {this.props.pageTitle}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
              <Tooltip title='Account settings'>
                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                  <IconButton
                    id='avatar-icon'
                    onClick={() => this.handleAccountMenuClick()}
                    size='small'
                    sx={{ ml: 2 }}
                    aria-controls={this.state.isMenuOpen ? 'account-menu' : undefined}
                    aria-haspopup='true'
                    aria-expanded={this.state.isMenuOpen ? 'true' : undefined}
                  >
                    <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                  </IconButton>
                </Box>
              </Tooltip>
            </Box>
            <Menu
              anchorEl={this.state.anchorEl}
              id='account-menu'
              open={this.state.isMenuOpen}
              onClose={() => this.handleAccountMenuClick()}
              onClick={() => this.handleAccountMenuClick()}
              PaperProps={{
                elevation: 0,
                sx: {
                  backgroundColor: 'white',
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1
                  },
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0
                  }
                }
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem component={Link} to='/account'>
                <Avatar /> My Account
              </MenuItem>
              <Divider />
              <MenuItem component={Link} to='/account/settings'>
                <ListItemIcon>
                  <Settings fontSize='small' />
                </ListItemIcon>
                Community
              </MenuItem>
              <MenuItem component={Link} to='/account/settings'>
                <ListItemIcon>
                  <Settings fontSize='small' />
                </ListItemIcon>
                Docs
              </MenuItem>
              <MenuItem component={Link} to='/account/settings'>
                <ListItemIcon>
                  <Settings fontSize='small' />
                </ListItemIcon>
                Feature Request
              </MenuItem>
              <MenuItem component={Link} to='/account/settings'>
                <ListItemIcon>
                  <Settings fontSize='small' />
                </ListItemIcon>
                Settings
              </MenuItem>
              <MenuItem component={Link} to='/account/settings'>
                <ListItemIcon>
                  <Settings fontSize='small' />
                </ListItemIcon>
                Support
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <Logout fontSize='small' />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            height: '100vh',
            width: this.drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: this.drawerWidth,
              boxSizing: 'border-box'
            }
          }}
          variant='permanent'
          anchor='left'
        >
          <Toolbar>
            <ImageListItem sx={{ width: '100%', paddingTop: '10px' }}>
              <img src={logo} alt='SEM Links Logo' loading='lazy' />
            </ImageListItem>
          </Toolbar>
          <Divider />
          <List>
            <ListItem key={'Inbox'} disablePadding>
              <ListItemButton component='a' href='#simple-list'>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={'Inbox'} />
              </ListItemButton>
            </ListItem>
            <ListItem key={'Spam'} disablePadding>
              <ListItemButton component='a' href='#simple-list'>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary='Spam' />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
        <main>{this.props.children}</main>
      </Box>
    );
  }
}
