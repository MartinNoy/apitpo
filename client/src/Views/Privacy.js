import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Markdown from './modules/components/Markdown';
import Typography from '../Assets/Typography';
import withRoot from '../Assets/withRoot';
import privacy from '../Assets/privacy.md';

function Privacy() {
  return (
    <React.Fragment>
      <Container>
        <Box sx={{ mt: 7, mb: 12 }}>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Privacy
          </Typography>
          <Markdown>{privacy}</Markdown>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default withRoot(Privacy);
