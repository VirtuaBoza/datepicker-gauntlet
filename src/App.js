import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import Home from './components/Home';
import DateInput from './components/DateInput';

const Loading = () => <div>Loading...</div>;

const DateInputPolyfill = Loadable({
  loader: () => import('./components/DateInputPolyfill'),
  loading: Loading,
});

const NoDepDateInputPolyfill = Loadable({
  loader: () => import('./components/NoDepDateInputPolyfill'),
  loading: Loading,
});

const ReactDatePicker = Loadable({
  loader: () => import('./components/ReactDatePicker'),
  loading: Loading,
});

const React_Date_Picker = Loadable({
  loader: () => import('./components/React-Date-Picker'),
  loading: Loading,
});

const React_Date_Picker_NoStyle = Loadable({
  loader: () => import('./components/React-Date-Picker-NoStyle'),
  loading: Loading,
});

const ReactDates = Loadable({
  loader: () => import('./components/ReactDates'),
  loading: Loading,
});

const BetterDateInputPolyfill = Loadable({
  loader: () => import('./components/BetterDateInputPolyfill'),
  loading: Loading,
});

const ReactDayPickerInput = Loadable({
  loader: () => import('./components/ReactDayPickerInput'),
  loading: Loading,
});

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route exact path="/date-input" component={DateInput} />
        <Route exact path="/date-input-polyfill" component={DateInputPolyfill} />
        <Route exact path="/nodep-date-input-polyfill" component={NoDepDateInputPolyfill} />
        <Route exact path="/react-datepicker" component={ReactDatePicker} />
        <Route exact path="/react-date-picker" component={React_Date_Picker} />
        <Route exact path="/react-date-picker-nostyle" component={React_Date_Picker_NoStyle} />
        <Route exact path="/react-dates" component={ReactDates} />
        <Route exact path="/better-dateinput-polyfill" component={BetterDateInputPolyfill} />
        <Route exact path="/react-day-picker" component={ReactDayPickerInput} />
      </Layout>
    );
  }
}

