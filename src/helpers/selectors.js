export default function getAppointmentsForDay(state, day) {

  let appointmentIdArray = [];

  for (const currentDay of state.days) {
    if (currentDay.name === day) {
      appointmentIdArray = currentDay.appointments;
    }
  }

  const result = appointmentIdArray.map(appointmentId => {
    return state.appointments[appointmentId];
  });

  return result;

}