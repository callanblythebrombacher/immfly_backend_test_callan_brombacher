/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import {Array} from "./pages/SimpleArray/Loadable";
import {Countries} from "./pages/Countries/Loadable";
import {ReverseArray} from "./pages/ReverseArray/Loadable";

export function App() {
  const { i18n } = useTranslation();
  return (
    <div id={"app"}>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/simple-array" component={Array} />
        <Route exact path="/countries" component={Countries} />
        <Route exact path="/reverse" component={ReverseArray} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
