import React from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import { AboutScreen } from "../../components/about/AboutScreen";
import { BlogScreen } from "../../components/blog/BlogScreen";
import { ContactScreen } from "../../components/contact/ContactScreen";
import { FooterScreen } from "../../components/footer/FooterScreen";
import { HomeScreen } from "../../components/home/HomeScreen";
import { NavbarScreen } from "../../components/ui/NavbarScreen";
import background from "../../img/header.svg";

import Chatbot from "react-chatbot-kit";
import MessageParser from "../../helpers/chat/MessageParser";
import ActionProvider from "../../helpers/chat/ActionProvider";
import config from "../../helpers/chat/config";
export const Dashboard = () => {
  const location = useLocation();
  return (
    <div className="text-justify">
      <NavbarScreen />
      {!location.pathname.includes("home") && (
        <img src={background} className="img-fluid  offset" alt="" />
      )}

      <main className="container mb-3 push">
        <Switch>
          <Route path="/home" component={HomeScreen} />
          <Route path="/about" component={AboutScreen} />
          <Route path="/contact" component={ContactScreen} />
          <Route path="/blog" component={BlogScreen} />
          <Redirect to="/home" />
        </Switch>
      </main>
      <div className="chatBot ">
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      </div>
      <div className="container-fluid">
        <FooterScreen />
      </div>
    </div>
  );
};
