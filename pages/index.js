import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import FormBox from '../src/components/FormBox';

export default function Index() {
  return (<>
    <Container maxWidth="sm">

      <Box sx={{ my: 4 }}>
        <Link href="/about" color="secondary">
          teste
        </Link>
        <ProTip />
        <Copyright />
        <FormBox />
      </Box>
    </Container>
  </>

  );
}
