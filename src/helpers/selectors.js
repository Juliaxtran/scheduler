export function getAppointmentsForDay(state, day) {

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


export function getInterview(state, interview) {

  if (!interview) {
    return null;
  }

  const interviewInfo = state.interviewers[interview.interviewer]

  return {
    student: interview.student,
    interviewer: interviewInfo
  }

}


export function getInterviewersForDay(state, day) {

  let InterviewersArr = [];
  for (const currentDay of state.days) {
    if (currentDay.name === day) {
      InterviewersArr = currentDay.interviewers;
    }
  }
  const result = InterviewersArr.map(id => {
    return state.interviewers[id];
  });

  return result;
}
