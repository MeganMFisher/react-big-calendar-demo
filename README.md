# React-Big-Calendar with Moment Demo

## Setup

Install react-big-calendar and moment.

```
npm install react-big-calendar moment
```

Import them and also the react-big-calender.css into your component.

```
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'
```

Use the momentLocalizer on BigCalendar passing in moment into the invocation. Put this below your imports and about your component. 

```
BigCalendar.momentLocalizer(moment);
```

Render the BigCalendar component from react-big-calender. The calendar will take 100% of the height of the div it is in so be sure to but a height on the outer div. 

You can check out their docs for all the prop options. We will add the events prop and set it equal to this.state.events.

```
            <BigCalendar
              events={this.state.events} 
            />
```

Lets go create our events. It will be an array of objects. 

```
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
  ```


This is the basic calendar you can check out their other options on the docs below.  


# Helpful Link: 

http://intljusticemission.github.io/react-big-calendar/examples/index.html