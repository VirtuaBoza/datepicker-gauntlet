import 'better-dom/dist/better-dom';
import 'better-dateinput-polyfill/dist/better-dateinput-polyfill';
import React from 'react';
import moment from 'moment';

class BetterDateInputPolyfill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment().format('YYYY-MM-DD')
    }

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const date = event.target.value;
    this.setState({date});
  }

  render() {
    return (
      <div>
        <h4>better-dateinput-polyfill</h4>
        <p>This apparently doesn't work at all.</p>
        <input type="date" value={this.state.date} onChange={this.onChange}/>
        <p>state = {this.state.date}</p>
      </div>
    );
  }
}

export default BetterDateInputPolyfill;
