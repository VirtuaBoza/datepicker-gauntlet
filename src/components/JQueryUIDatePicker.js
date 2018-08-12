import React from 'react';

// This doesn't work
class JQueryUIDatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null
    }
    this.dateInput = React.createRef();
    this.onChange = this.onChange.bind(this);
  }

  // componentDidMount() {
  //   if (this.dateInput.current) {
  //     this.dateInput.current.addEventListener('onSelect', this.onChange);
  //     console.log('added listener');
  //   }
  // }

  // componentWillUnmount() {
  //   if (this.dateInput.current) {
  //     this.dateInput.current.removeEventListener('change', this.onChange);
  //   }
  // }

  onChange(event) {
    const date = event.target.value;
    this.setState({date});
    console.log('onChange fired');
  }

  render() {
    return (
      <div>
        <h4>jQuery UI Datepicker</h4>
        <p></p>
        <input id="datepicker" type="text" onChange={this.onChange} ref={this.dateInput}/>
        <p>state = {this.state.date}</p>
      </div>
    );
  }
}

export default JQueryUIDatePicker;
