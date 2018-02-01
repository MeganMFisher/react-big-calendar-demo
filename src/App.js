import React, { Component } from 'react';
import logo from './logo.svg';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import './App.css';



BigCalendar.momentLocalizer(moment);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [  {
        id: 0,
        title: 'All Day Event very long title',
        allDay: true,
        start: new Date(2018, 1, 7),
        end: new Date(2018, 1, 7),
      },
      {
        id: 1,
        title: 'Long Event',
        start: new Date(2018, 1, 9),
        end: new Date(2018, 1, 13),
      },
    
      {
        id: 2,
        title: 'Hawaii',
        start: new Date(2018, 2, 13, 0, 0, 0),
        end: new Date(2018, 2, 20, 0, 0, 0),
      },
    
      {
        id: 3,
        title: 'Party',
        start: new Date(2018, 2, 6, 0, 0, 0),
        end: new Date(2018, 2, 13, 0, 0, 0),
      },  
      {
        id: 4,
        title: 'Conference',
        start: new Date(2018, 3, 11),
        end: new Date(2018, 3, 13),
        desc: 'Big conference for important people',
      }
    ]
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <div className='calenderContainer'>
            <BigCalendar
              height="100vh"
              selectable
              events={this.state.events} 
              defaultView='week'
              defaultDate={new Date()}
            />
          </div>
      </div>
    );
  }
}

export default App;
