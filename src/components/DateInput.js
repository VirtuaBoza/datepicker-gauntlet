import React from 'react';
import moment from 'moment';

class DateInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment().format('YYYY-MM-DD')
    }
  }

  onChange = event => {
    const date = event.target.value;
    this.setState({date});
  }

  render() {
    return (
      <div>
        <h4>Regular <code>input</code> with <code>type="date"</code></h4>
        <p>IE11 doesn't support this. Note the lack of a date picker.</p>
        <input type="date" value={this.state.date} onChange={this.onChange}/>
        <p>state = {this.state.date}</p>
      </div>
    );
  }
}

export default DateInput;
