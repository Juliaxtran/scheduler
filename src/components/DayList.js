import React from 'react';
import DayListItem from './DayListItem';

function DayList(props) {

// Create DayList Items
  const schedule = props.days.map((day) => {
    return (
      <DayListItem key={day.id}
        name={day.name}
        spots={day.spots}
        selected={props.value === day.name}
        setDay={props.onChange} />
    )
  })

  return (
    <ul>
      {schedule}
    </ul>
  );
}

export default DayList;