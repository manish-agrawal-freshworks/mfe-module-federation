import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const APPS = {
  MFE1: '/root',
  MFE2: '/home',
  MFE3: '/auth'
}

export default function Header({ isSignedIn, onSignOut }: any) {
  const onClick = () => {
    if (isSignedIn && onSignOut) {
      onSignOut();
    }
  };

  const location = useLocation();
  console.log('header call', location.pathname);

  const isRootMFE = () => {
    return location.pathname === '/' || location.pathname.startsWith(APPS.MFE1);
  }
  const isMFEPresent = (mfeName: string) => {
    return location.pathname.startsWith(mfeName);
  }

  return (
    <React.Fragment>
      <AppBar
        position='static'
        color='default'
        elevation={0}
        sx={{ borderBottom: '1px solid divider' }}
      >
        <Toolbar
          sx={{
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Button
              color='primary'
              variant={isRootMFE() ? 'contained': 'text'}
              sx={{ mt: 1, mb: 1, ml: 1.5, mr: 1.5}}
              component={RouterLink}
              to={APPS.MFE1}
            >
              MFE1
            </Button>
            {isSignedIn ?
              <Button
                color='primary'
                variant={isMFEPresent(APPS.MFE2) ? 'contained': 'text'}
                sx={{ mt: 1, mb: 1, ml: 1.5, mr: 1.5}}
                component={RouterLink}
                to={APPS.MFE2}
              >
                MFE2
              </Button>
              : <Typography variant='h6'>
                  MFE - 2 will appear after login
              </Typography>
            }
          </div>
          <Button
            color='primary'
            variant='outlined'
            sx={{ mt: 1, mb: 1, ml: 1.5, mr: 1.5}}
            component={RouterLink}
            to={isSignedIn ? '/' : '/auth/signin'}
            onClick={onClick}
          >
            {isSignedIn ? 'Logout' : 'Login - MFE3'}
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
