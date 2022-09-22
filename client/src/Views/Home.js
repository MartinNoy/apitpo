import * as React from 'react';
import Button from '../Components/Button';
import Typography from '../Assets/js/Typography';
import ProductHeroLayout from '../Assets/js/HomeLayout';

const backgroundImage =
  'https://www.city.ac.uk/__data/assets/image/0010/685342/varieties/breakpoint-max.jpg';
  //https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Upgrade your knowledge
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Enjoy secret offers up to -50% off the best courses every Sunday.
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="/sign-up"
        sx={{ minWidth: 200 }}
      >
        Register
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover the experience
      </Typography>
    </ProductHeroLayout>
  );
}
