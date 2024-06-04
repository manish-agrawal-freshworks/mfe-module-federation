import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Dashboard() {
  return (
    <React.Fragment>
      <main>
        <Box
          sx={{
            backgroundColor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth='sm'>
            <Typography component='h1' variant='h2' align='center' color='textPrimary' gutterBottom>
              MFE 2
            </Typography>
            <Typography variant='h5' align='center' color='textSecondary' paragraph>
              Freshrelease Project tasks Page
            </Typography>
          </Container>
        </Box>
      </main>
    </React.Fragment>
  );
}
