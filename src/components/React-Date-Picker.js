import React from 'react';
import DatePicker from 'react-date-picker';

class React_Date_Picker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }

    this.onChange = this.onChange.bind(this);
  }

  onChange(date) {
    this.setState({ date });
  }

  render() {
    return (
      <div>
        <h4>react-date-picker</h4>
        <p>This one seems to only want to open upwards.</p>
        <DatePicker
          value={this.state.date}
          onChange={this.onChange} />
        <p>state = {this.state.date && this.state.date.toString()}</p>
      </div>
    );
  }
}

export default React_Date_Picker;