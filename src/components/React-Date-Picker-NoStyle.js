import React from 'react';
import DatePicker from 'react-date-picker/dist/entry.nostyle';

class React_Date_Picker_NoStyle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  }

  onChange = date => {
    this.setState({ date });
  }

  render() {
    return (
      <div>
        <h4>react-date-picker</h4>
        <DatePicker
          value={this.state.date}
          onChange={this.onChange} />
        <p>state = {this.state.date && this.state.date.toString()}</p>
      </div>
    );
  }
}

export default React_Date_Picker_NoStyle;