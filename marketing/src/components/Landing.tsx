import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
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
              MFE 1
            </Typography>
            <Typography variant='h5' align='center' color='textSecondary' paragraph>
              Freshrelease Dashboard Page
            </Typography>
            <Box sx={{ mt: 4 }}>
              <Grid container spacing={2} justifyContent='center'>
                <Grid item>
                  <Link to='/root/pricing'>
                    <Button variant='contained' color='primary'>
                      Go to another route in MFE1
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </main>
    </React.Fragment>
  );
}
