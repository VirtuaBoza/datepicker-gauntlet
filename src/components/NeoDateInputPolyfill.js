import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { browserSupportsDateInput} from '../utilities'
import 'neo-date-input-polyfill';

class NeoDateInputPolyfill extends React.Component {
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
        <h4>neo-date-input-polyfill</h4>
        <p>This appears to perform the same as <Link to="/date-input-polyfill">date-input-polyfill</Link> from which it was forked.</p>
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

export default NeoDateInputPolyfill;
