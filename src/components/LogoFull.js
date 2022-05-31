import PropTypes from 'prop-types';
import { forwardRef } from 'react';
// next
import NextLink from 'next/link';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
// components
import Image from './Image'

// ----------------------------------------------------------------------

function FullLogo() {
  return (
    <Box>
      <div style={{position: "absolute", width: '100%', height: '100%', top: '3rem', border: 'none', margin: 0}} >
        <Image alt="logo" src="/logo/logo_full.png" sx={{ width: 600, minWith: 1 }} />
      </div>
    </Box>
  )
}

export default FullLogo;
