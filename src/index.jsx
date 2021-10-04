import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Courses from './pages/Courses';
import Events from './pages/Events';
import KnowledgeBase from './pages/KnowledgeBase';
import Reports from './pages/Reports';
import Tests from './pages/Tests';
import Users from './pages/Users';

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <main className="main">
      <Switch>
        <Route path="/tests" component={Tests} />
        <Route path="/events" component={Events} />
        <Route path="/knowledge-base" component={KnowledgeBase} />
        <Route path="/users" component={Users} />
        <Route path="/reports" component={Reports} />
        <Route path="/" component={Courses} />
      </Switch>
    </main>
  </BrowserRouter>,
  document.getElementById('root')
);
