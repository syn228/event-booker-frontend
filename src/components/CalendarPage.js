import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

class CalendarPage extends Component {
  state = {
    date: moment(),
    change: false
  }
  
  handleChange = date => {
    this.setState({ date, change: true })
  }

  render() {
    return (
      <div>
        <p> Please select a date!</p>
        <DatePicker
          onChange={this.handleChange}
          selected={this.state.date}
        />
        <div>
        {!this.state.change ? null : <p>You have selected: {JSON.stringify(this.state.date._d)}</p>}
        </div>
      </div>
    );
  }
}

export default CalendarPage;