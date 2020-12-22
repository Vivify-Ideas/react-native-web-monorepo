import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useRouter } from 'next/router';
import {
  userSelector,
  makeSelectUserAuthStatus,
} from 'store/selectors/UserSelector';
import { logout } from 'store/actions/UserActions';
import { PAGES } from 'constants/routes';
import $t from 'i18n';

const Header = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const user = useSelector(userSelector());
  const auth = useSelector(makeSelectUserAuthStatus());
  console.log(auth);

  const handleSignOut = () => dispatch(logout());

  const navigateToSignIn = () => router.push(PAGES.SIGN_IN);

  const renderUserHeader = () =>
    auth ? (
      <div>
        <p>{`${user.first_name} ${user.last_name}`}</p>
        <button type="button" onClick={handleSignOut}>
          {$t('auth.signOut')}
        </button>
      </div>
    ) : (
      <button type="button" onClick={navigateToSignIn}>
        {$t('auth.signIn')}
      </button>
    );

  return <div>{renderUserHeader()}</div>;
};

export default Header;
