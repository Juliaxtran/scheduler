import React from 'react';
import "./InterviewerList.scss";
import InterviewerListItem from './InterviewerListItem';

function InterviewerList(props){


const interviewerOptions = props.interviewers.map((interviewer) => {

  return (
    <InterviewerListItem key={interviewer.id}
    name={interviewer.name}
    selected={interviewer.id === props.value}
    avatar={interviewer.avatar}
    setInterviewer={()=> props.onChange(interviewer.id)}
    />
  )
})

  return (

<section className="interviewers">
  <h4 className="interviewers__header text--light">Interviewer</h4>
  <ul className="interviewers__list">{interviewerOptions}</ul>
</section>

);
}

export default InterviewerList;