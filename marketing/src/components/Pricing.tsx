import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Link as RouterLink } from 'react-router-dom';

const tiers = [
  {
    title: 'Free',
    price: '0',
    description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: '15',
    description: ['20 users included', '10 GB of storage', 'Help center access', 'Priority email support'],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: '30',
    description: ['50 users included', '30 GB of storage', 'Help center access', 'Phone & email support'],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
];

export default function Pricing() {
  return (
    <React.Fragment>
      {/* Hero unit */}
      <Container maxWidth='sm' component='main' sx={{ pt: 8, pb: 6 }}>
        <Typography component='h1' variant='h2' align='center' color='textPrimary' gutterBottom>
          MFE 1 - another route
        </Typography>
        <Typography variant='h5' align='center' color='textSecondary' component='p'>
          Another route in MFE - 1
        </Typography>
      </Container>
      {/* End hero unit */}
    </React.Fragment>
  );
}
