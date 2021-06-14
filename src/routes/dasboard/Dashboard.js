import React from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { AboutScreen } from '../../components/about/AboutScreen';
import { BlogScreen } from '../../components/blog/BlogScreen';
import { PostView } from '../../components/blog/PostView';
import { ContactScreen } from '../../components/contact/ContactScreen';
import { FooterScreen } from '../../components/footer/FooterScreen';
import { HomeScreen } from '../../components/home/HomeScreen';
import { NavbarScreen } from '../../components/ui/NavbarScreen';
import background from '../../img/header.svg';

export const Dashboard = () => {
  const location = useLocation();

  return (
    <div className='text-justify'>
      <NavbarScreen />
      {!(
        location.pathname.includes('home') ||
        location.pathname.includes('/blog/')
      ) && <img src={background} className='img-fluid  offset' alt='' />}

      <main className='container mb-3 push'>
        <Switch>
          <Route path='/blog/:id' component={PostView} />
          <Route path='/home' component={HomeScreen} />
          <Route path='/about' component={AboutScreen} />
          <Route path='/contact' component={ContactScreen} />
          <Route path='/blog' component={BlogScreen} />
          <Redirect to='/home' />
        </Switch>
      </main>

      <div className='container-fluid'>
        <FooterScreen />
      </div>
    </div>
  );
};
