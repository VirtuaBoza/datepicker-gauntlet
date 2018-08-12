import React from 'react';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';

class ReactDates extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: moment(),
      focused: false,
    }
  }

  render() {
    return (
      <div>
        <h4>react-dates (by airbnb)</h4>
        <p>This one's pretty specific to airbnb's needs.</p>
        <SingleDatePicker
          date={this.state.date} // momentPropTypes.momentObj or null
          onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
          focused={this.state.focused} // PropTypes.bool
          onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
          id="your_unique_id" // PropTypes.string.isRequired,
          isOutsideRange={() => false}
        />
        <p>state = {this.state.date && this.state.date.toString()}</p>
      </div>
    );
  }
}

export default ReactDates;