import { Box } from '@mui/material';
// components
import Image from './Image'

// ----------------------------------------------------------------------

function FullLogo() {
  return (
    <Box>
      <div style={{position: 'absolute', width: '100%', height: '100%', top: '3rem', border: 'none', margin: 0}} >
        <Image alt='logo' src='/logo/logo_full.png' sx={{ width: 600, minWith: 1 }} />
      </div>
    </Box>
  )
}

export default FullLogo;
