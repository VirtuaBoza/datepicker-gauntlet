import React from 'react';
import DateInput from './DateInput';
import moment from 'moment';
import { Link } from 'react-router-dom';

class Winner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: moment().format('YYYY-MM-DD')
    }

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const date = e.target.value;
    this.setState({date});
  }

  render() {
    return (
      <div>
        <h4>This page uses <Link to="/date-input-polyfill">date-input-polyfill</Link> indirectly via a custom component I made which abstracts the intricacies of making the polyfill work.</h4>
        <p>The only issue is that the alignment/visibility of the picker seems to be... off (at least in this example which is so close to a sidebar).</p>
        <DateInput onChange={this.onChange} value={this.state.date}/>
        <p>state = {this.state.date}</p>
      </div>
    );
  }
}

export default Winner;
