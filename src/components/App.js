import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>;

const DateInput = Loadable({
  loader: () => import('./DateInput'),
  loading: Loading,
});

const DateInputPolyfill = Loadable({
  loader: () => import('./DateInputPolyfill'),
  loading: Loading,
});

const NoDepDateInputPolyfill = Loadable({
  loader: () => import('./NoDepDateInputPolyfill'),
  loading: Loading,
});

const ReactDatePicker = Loadable({
  loader: () => import('./ReactDatePicker'),
  loading: Loading,
});

const React_Date_Picker = Loadable({
  loader: () => import('./React-Date-Picker'),
  loading: Loading,
});

const React_Date_Picker_NoStyle = Loadable({
  loader: () => import('./React-Date-Picker-NoStyle'),
  loading: Loading,
});

const ReactDates = Loadable({
  loader: () => import('./ReactDates'),
  loading: Loading,
});

const BetterDateInputPolyfill = Loadable({
  loader: () => import('./BetterDateInputPolyfill'),
  loading: Loading,
});

const ReactDayPickerInput = Loadable({
  loader: () => import('./ReactDayPickerInput'),
  loading: Loading,
});

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Date Input Options for IE11</h1>
            <p>Be sure to clear your cache each time you visit a different page to clear out polyfills.</p>
            <nav>
              <ul>
                <li><NavLink to="/">Plain Date Input</NavLink></li>
                <li><NavLink to="/nodep-date-input-polyfill">nodep-date-input-polyfill</NavLink></li>
                <li><NavLink to="/date-input-polyfill">date-input-polyfill</NavLink></li>
                <li><NavLink to="/better-dateinput-polyfill">better-dateinput-polyfill</NavLink></li>
                <li><NavLink to="/react-datepicker">react-datepicker</NavLink></li>
                <li><NavLink to="/react-date-picker">react-date-picker</NavLink></li>
                <li><NavLink to="/react-date-picker-nostyle">react-date-picker (No Style)</NavLink></li>
                <li><NavLink to="/react-dates">react-dates</NavLink></li>
                <li><NavLink to="/react-day-picker">react-day-picker</NavLink></li>
                <li><a href="https://ourcodeworld.com/articles/read/535/top-10-best-open-source-reactjs-datepicker-components">Some others</a></li>
              </ul>
            </nav>
          </header>
          <br />
          <Route exact path="/" component={DateInput} />
          <Route exact path="/date-input-polyfill" component={DateInputPolyfill} />
          <Route exact path="/nodep-date-input-polyfill" component={NoDepDateInputPolyfill} />
          <Route exact path="/react-datepicker" component={ReactDatePicker} />
          <Route exact path="/react-date-picker" component={React_Date_Picker} />
          <Route exact path="/react-date-picker-nostyle" component={React_Date_Picker_NoStyle} />
          <Route exact path="/react-dates" component={ReactDates} />
          <Route exact path="/better-dateinput-polyfill" component={BetterDateInputPolyfill} />
          <Route exact path="/react-day-picker" component={ReactDayPickerInput} />
        </div>
      </Router>
    );
  }
}

export default App;
