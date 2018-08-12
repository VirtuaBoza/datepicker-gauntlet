import React from 'react';
import MyDateInput from './MyDateInput';
import moment from 'moment';

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
        <MyDateInput onChange={this.onChange} value={this.state.date}/>
        <p>state = {this.state.date}</p>
      </div>
    );
  }
}

export default Winner;
