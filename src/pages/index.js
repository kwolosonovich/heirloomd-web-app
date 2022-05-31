import { useEffect } from 'react';
// next
import { useRouter } from 'next/router';
// config
import { PATH_AFTER_LOGIN } from '../config';
// routes
import { PATH_DASHBOARD } from '../routes/paths';

// ----------------------------------------------------------------------

export default function Index() {
  const { pathname, replace } = useRouter();

  useEffect(() => {
    if (pathname === PATH_DASHBOARD.root) {
      replace(PATH_AFTER_LOGIN);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  /*
   * TODO: re-add when adding login
   *  useEffect(() => {
   *    prefetch(PATH_AFTER_LOGIN);
   *    // eslint-disable-next-line react-hooks/exhaustive-deps
   *  }, []);
   */

  return null;
}
