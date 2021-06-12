import React, { useEffect } from 'react';
import LoadingMask from 'react-loadingmask';
import 'react-loadingmask/dist/react-loadingmask.css';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import { startChecking } from '../actions/authActions';
import { NewPost } from '../components/blog/NewPost';
import { LoadingScreen } from '../components/ui/LoadingScreen';
import { AuthRouter } from './auth/AuthRouter';
import { Dashboard } from './dasboard/Dashboard';
import { PrivateRoutes } from './PrivateRoute';
import { PublicRoutes } from './PublicRoute';

export const AppRoute = () => {
  const { checking, uid } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch]);

  if (checking) {
    return (
      <>
        <LoadingMask loading={true} text={'loading...'}>
          <div style={{ width: '100vw', height: '100vh' }}>
            <LoadingScreen />
          </div>
        </LoadingMask>
      </>
    );
  }

  return (
    <Router>
      <div className='animate__animated animate__fadeIn'>
        <Switch>
          <PrivateRoutes
            isAuthenticated={!!uid}
            exact
            path='/blog/new-post'
            render={NewPost}
          />
          <PublicRoutes
            isAuthenticated={!!uid}
            path='/auth/'
            render={AuthRouter}
          />
          <PublicRoutes isAuthenticated={!!uid} path='/' render={Dashboard} />

          <Redirect to='/home' />
        </Switch>
      </div>
    </Router>
  );
};
