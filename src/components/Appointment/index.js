import React from 'react';
import "components/Appointment/styles.scss";

function Appointment(props) {
  const formatTime = (time) => {
    if (!time) {
      return `No appointments`
    }
    return `Appointment at ${time}`
  }

  const time = formatTime(props.time);
  return (
    <article className="appointment">{time}</article>
  );
}

export default Appointment;