import 'date-input-polyfill';
import React from 'react';
import moment from 'moment';

class DateInputPolyfill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment().format('YYYY-MM-DD')
    }

    this.onChange = this.onChange.bind(this);
  }

  shouldComponentUpdate() {
    if (this.dateInput) {
      this.dateInput.removeEventListener('change', this.onChange);
    }

    return true;
  }

  componentDidUpdate() {
    if (this.dateInput) {
      this.dateInput.addEventListener('change', this.onChange);
    }
  }

  onChange(event) {
    const date = event.target.value;
    this.setState({ date });
    console.log('onChange fired.');
  }

  render() {
    return (
      <div>
        <h4>date-input-polyfill</h4>
        <p>I've had this working before. <a href="https://github.com/jcgertig/date-input-polyfill/issues/31">It requires using <code>ref</code> because it doesn't fire <code>onChange</code> properly</a>, but I can't seem to get it working now.</p>
        <input
          type="date"
          defaultValue={this.state.date}
          ref={(input) => { this.dateInput = input; }} />
        <p>state = {this.state.date}</p>
      </div>
    );
  }
}

export default DateInputPolyfill;