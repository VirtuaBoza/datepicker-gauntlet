import 'nodep-date-input-polyfill';
import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

class NoDepDateInputPolyfill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment().format('YYYY-MM-DD')
    }
    this.dateInput = React.createRef();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.dateInput.current.setAttribute(`value`, this.state.date);
  }

  onChange(event) {
    const date = event.target.value;
    this.setState({ date });
    this.dateInput.current.setAttribute(`value`, date);
  }

  render() {
    return (
      <div>
        <h4>nodep-date-input-polyfill</h4>
        <p>This one properly fires <code>onChange</code> and sets state, but the displayed value in the input doesn't change unless it begins as null (which is why <Link to="/date-input-polyfill">this</Link> exists).</p>
        <input
          type="date"
          value={this.state.date}
          onChange={this.onChange}
          onKeyDown={e => e.preventDefault()}
          ref={this.dateInput} />
        <p>state = {this.state.date}</p>
      </div>
    );
  }
}

export default NoDepDateInputPolyfill;