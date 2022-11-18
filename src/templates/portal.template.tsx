import { Logout, PersonAdd, Settings } from '@mui/icons-material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import {
  AppBar,
  Avatar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
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
import * as React from 'react';

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
  }
  private mountClickEventListener() {
    $('#avatar-icon').on('click', (event) => {
      return this.handleAccountMenuClick(event);
    });
  }

  private handleAccountMenuClick(event?: JQuery.ClickEvent<HTMLElement>) {
    if (this.isMenuOpen) {
      setAnchorEl(null);
      return false;
    }
    setAnchorEl(event.currentTarget);
    return true;
  }

  render() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position='fixed' sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
          <Toolbar>
            <Typography variant='h6' noWrap component='div'>
              {this.props.pageTitle}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
              <Tooltip title='Account settings'>
                <IconButton
                  id='avatar-icon'
                  onClick={() => this.handleAccountMenuClick()}
                  size='small'
                  sx={{ ml: 2 }}
                  aria-controls={this.isMenuOpen ? 'account-menu' : undefined}
                  aria-haspopup='true'
                  aria-expanded={this.isMenuOpen ? 'true' : undefined}
                >
                  <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                </IconButton>
              </Tooltip>
            </Box>
            <Menu
              anchorEl={anchorEl}
              id='account-menu'
              open={this.isMenuOpen}
              onClose={() => this.handleAccountMenuClick()}
              onClick={() => this.handleAccountMenuClick()}
              PaperProps={{
                elevation: 0,
                sx: {
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
              <MenuItem>
                <Avatar /> Profile
              </MenuItem>
              <MenuItem>
                <Avatar /> My account
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <PersonAdd fontSize='small' />
                </ListItemIcon>
                Add another account
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <Settings fontSize='small' />
                </ListItemIcon>
                Settings
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
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box'
            }
          }}
          variant='permanent'
          anchor='left'
        >
          <Toolbar />
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
