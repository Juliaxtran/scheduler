
import React, { Fragment } from 'react';
import "components/Appointment/styles.scss";
import Header from "components/Appointment/Header"
import Show from "components/Appointment/Show"
import Empty from "components/Appointment/Empty"

function Appointment(props) {
  // const formatTime = (time) => {
  //   if (!time) {
  //     return `No appointments`
  //   }
  //   return `Appointment at ${time}`
  // }

  // const scheduleTime = formatTime(props.time);
  return (
  <Fragment>
    <Header time={props.time}/>
    <article className="appointment">
    {props.interview ?
     <Show
     student={props.interview.student}
     interviewer={props.interview.interviewer}/> : <Empty/> }
    </article>
   </Fragment>

  );
}

export default Appointment;