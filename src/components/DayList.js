import React from 'react';
import DayListItem from './DayListItem';

function DayList(props){

const schedule = props.days.map((day) => {
return (
  <DayListItem key={day.id}
   name={day.name}
   spots={day.spots}
   selected={props.day === day.name}
   setDay={props.setDay}/>
)
})


return (
<ul>
{schedule}
</ul>
);
}

export default DayList;