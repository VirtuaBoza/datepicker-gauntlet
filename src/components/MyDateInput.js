import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'date-input-polyfill';

class MyDateInput extends React.Component {
  constructor(props) {
    super(props);
    this.dateInput = React.createRef();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    if (this.dateInput.current && !this.browserSupportsDateInput()) {
      this.dateInput.current.addEventListener('change', this.onChange);
    }
  }

  componentWillUnmount() {
    if (this.dateInput.current && !this.browserSupportsDateInput()) {
      this.dateInput.current.removeEventListener('change', this.onChange);
    }
  }

  onChange(event) {
    const date = this.browserSupportsDateInput()
      ? event.target.value
      : event.target.value
        ? moment(event.target.value, 'MM/DD/YYYY').format('YYYY-MM-DD')
        : null;
    event.target.value = date;
    this.props.onChange(event);
  }

  browserSupportsDateInput() {
    var test = document.createElement('input');
    try {
      test.type = 'date';
    } catch (error) {
      return false;
    }

    return test.type === 'date';
  }

  render() {
    const value = this.props.value ? this.browserSupportsDateInput()
      ? this.props.value
      : moment(this.props.value).format('MM/DD/YYYY')
      : ''

    return (
      <input
        type="date"
        value={value}
        date-format="mm/dd/yyyy"
        onChange={this.onChange}
        ref={this.dateInput} />
    );
  }
}

MyDateInput.propTypes = {
  value: function (props, propName, componentName) {
    if (props[propName] && !/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/.test(props[propName])) {
      return new Error(
        `Invalid prop ${propName} supplied to ${componentName}. Expects date string in 'YYYY-MM-DD' format.`
      );
    }
  },
  onChange: PropTypes.func.isRequired
}

export default MyDateInput;
