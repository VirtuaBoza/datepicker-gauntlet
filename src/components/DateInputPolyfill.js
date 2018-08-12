import React from 'react';
import moment from 'moment';
import 'date-input-polyfill';
import { browserSupportsDateInput } from '../utilities';

class DateInputPolyfill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: browserSupportsDateInput() 
      ? moment().format('YYYY-MM-DD') 
      : moment().format('MM/DD/YYYY')
    }
    this.dateInput = React.createRef();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    if (this.dateInput.current) {
      this.dateInput.current.addEventListener('change', this.onChange);
    }
  }

  componentWillUnmount() {
    if (this.dateInput.current) {
      this.dateInput.current.removeEventListener('change', this.onChange);
    }
  }

  onChange(event) {
    const date = event.target.value;
    this.setState({ date });
  }

  render() {
    return (
      <div>
        <h4>date-input-polyfill</h4>
        <p>It requires using <code>ref</code> because it doesn't fire <code>onChange</code> properly for React.</p>
        <input
          type="date"
          defaultValue={this.state.date}
          date-format="mm/dd/yyyy"
          ref={this.dateInput} />
        <p>state = {this.state.date}</p>
      </div>
    );
  }
}

export default DateInputPolyfill;