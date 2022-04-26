import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';


export default function useApplicationData(props){

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {}
  });

  const setDay = day => setState({ ...state, day });

  // Api Call
  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then((all) => {
      setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }))
    });
  }, []);

  // Book an Interview
  function bookInterview(id, interview) {
    console.log(id, interview);
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.put(`/api/appointments/${id}`, { interview })
      .then(() => {
        setState({
          ...state,
          appointments
        })


      });
  }

   // Cancel Interview
   function cancelInterview(id) {
    return axios.delete(`/api/appointments/${id}`).then(res => {

    });
  }

    return {
      state,
      setDay,
      bookInterview,
      cancelInterview
    }


}









