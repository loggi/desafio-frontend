import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import Forms from '../src/components/Forms';

export default function Index() {
  return (<>
    <Container maxWidth="sm">

      <Box sx={{ my: 4 }}>
        <Link href="/about" color="secondary">
          teste
        </Link>
        <ProTip />
        <Copyright />
        <Forms />
      </Box>
    </Container>
  </>

  );
}
