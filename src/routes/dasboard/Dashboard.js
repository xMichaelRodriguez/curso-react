import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { AboutScreen } from "../../components/about/AboutScreen";
import { BlogScreen } from "../../components/blog/BlogScreen";
import { ContactScreen } from "../../components/contact/ContactScreen";
import { FooterScreen } from "../../components/footer/FooterScreen";
import { HomeScreen } from "../../components/home/HomeScreen";
import { NavbarScreen } from "../../components/ui/NavbarScreen";

export const Dashboard = () => {
  return (
    <div className="text-justify">
      <header>
        <NavbarScreen />
      </header>
      <main className="container mb-3 push">
        <Switch>
          <Route path="/home" component={HomeScreen} />
          <Route path="/about" component={AboutScreen} />
          <Route path="/contact" component={ContactScreen} />
          <Route path="/blog" component={BlogScreen} />
          <Redirect to="/home" />
        </Switch>
      </main>

      <div className="container-fluid">
        <FooterScreen />
      </div>
    </div>
  );
};
