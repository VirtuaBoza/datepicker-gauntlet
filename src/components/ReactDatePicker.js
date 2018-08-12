import React from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class ReactDatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment()
    }

    this.onChange = this.onChange.bind(this);
  }

  onChange(date) {
    this.setState({ date });
  }

  render() {
    return (
      <div>
        <h4>react-datepicker</h4>
        <p>For some reason, once I added bootstrap styling to the page, the datepicker on this shrunk.</p>
        <p>Despite this, I believe this to be the best option of the ones I've tried. react-day-picker may be stylistically superior, but this one allows you to select year and such.</p>
        <DatePicker
          selected={this.state.date}
          onChange={this.onChange}
          showYearDropdown
          scrollableYearDropdown />
        <p>state = {this.state.date && this.state.date.toString()}</p>
      </div>
    );
  }
}

export default ReactDatePicker;