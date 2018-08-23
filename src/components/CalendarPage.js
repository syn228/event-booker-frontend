import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

class CalendarPage extends Component {
  state = {
    date: moment()
  }
  
  handleChange = date => {
    this.setState({ date })
    console.log("hit")
  }

  render() {
    return (
      <div>
        <DatePicker
          onChange={this.handleChange}
          selected={this.state.date}
        />
      </div>
    );
  }
}

export default CalendarPage;