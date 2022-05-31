// @mui
import { Box } from '@mui/material';
// components
import Image from './Image'

// ----------------------------------------------------------------------

function Logo() {
  return (
    <Box>
      <div style={{position: 'absolute', width: '100%', height: '100%', top: '.5rem', left: '.5rem', border: 'none', padding: 0, margin: 0}} >
        <Image alt='logo' src='/logo/logo_small.png' sx={{ maxWidth: 50 }} />
      </div>
    </Box>
  )
}

export default Logo;
