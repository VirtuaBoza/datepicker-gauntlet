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
  }

  onChange = date => {
    this.setState({ date });
  }

  render() {
    return (
      <div>
        <h4>react-datepicker</h4>
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