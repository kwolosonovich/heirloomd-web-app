import { memo } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
//
import BackgroundIllustration from './illustration_background';

import LogoFull from '../components/LogoFull'

// ----------------------------------------------------------------------

function ComingSoonIllustration({ ...other }) {
  const theme = useTheme();

  const PRIMARY_MAIN = theme.palette.primary.main;

  const PRIMARY_DARK = theme.palette.primary.dark;

  const PRIMARY_DARKER = theme.palette.primary.darker;

  return (
    <Box {...other}>

      <LogoFull />

    </Box>
  );
}

export default memo(ComingSoonIllustration);
