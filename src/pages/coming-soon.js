// @mui
import { styled } from '@mui/material/styles';
import { Container, Typography } from '@mui/material';
// layouts
import Layout from '../layouts';
// components
import Page from '../components/Page';
// assets
import { ComingSoonIllustration } from '../assets';

// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 580,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(2, 0),
}));

export default function ComingSoon() {
  return (
    <Page title="Coming Soon">
      <Container>
        <ContentStyle sx={{ textAlign: 'center' }}>
        <ComingSoonIllustration sx={{ my: 0 }} />
          <Typography variant="h3" paragraph style={{marginTop: '-10rem'}}>
            Coming Soon!
          </Typography>
          <Typography>We are currently working hard on this page!</Typography>
        </ContentStyle>
      </Container>
    </Page>
  );
}

ComingSoon.getLayout = function getLayout(page) {
  return <Layout variant="logoOnly">{page}</Layout>;
};
