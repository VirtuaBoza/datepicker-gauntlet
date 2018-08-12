import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { formatDate, parseDate } from 'react-day-picker/moment';
import 'react-day-picker/lib/style.css';

class ReactDayPickerInput extends React.Component {
  constructor(props) {
    super(props);
    //this.handleDayChange = this.handleDayChange.bind(this);
    this.state = {
      date: new Date(),
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(date) {
    this.setState({ date });
  }

  render() {
    return (
      <div>
        <h4>react-day-picker</h4>
        <p>This is a contender for best, but the props are a bit complicated and it doesn't have year selectors to change year quickly.</p>
        <DayPickerInput
          onDayChange={this.onChange}
          formatDate={formatDate}
          parseDate={parseDate}
          value={`${formatDate(this.state.date)}`} />
        <p>state = {this.state.date && this.state.date.toString()}</p>
      </div>
    );
  }
}

export default ReactDayPickerInput;