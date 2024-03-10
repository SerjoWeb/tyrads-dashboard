import React from 'react';
import ToasterProvider from './components/providers/ToasterProvider';
import AuthorizedRoute from './route/AuthorizedRoute';
import NotAuthorizedRoute from './route/NotAuthorizedRoute';
import Spinner from './components/shared/Spinner';

import { account } from './store/account';
import { STORAGE } from './common/constants';

const App = (): React.ReactElement => {
  const [loading, setLoading] = React.useState<boolean>(true);

  const { user, setUser } = account();

  React.useEffect(() => {
    window.localStorage.getItem(STORAGE)
      ? setUser(JSON.parse(window.localStorage.getItem(STORAGE) as string))
      : null;

    setLoading(false);
  }, []);

  return (
    <React.Fragment>
      {loading ? (
        <div className='flex min-h-screen flex-col items-center justify-center p-24'>
          <Spinner />
        </div>
      ) : (
        <React.Fragment>
          {user ? <AuthorizedRoute /> : <NotAuthorizedRoute />}
          <ToasterProvider />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default App;
