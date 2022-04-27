import React from 'react';
import "./InterviewerList.scss";
import InterviewerListItem from './InterviewerListItem';
import PropTypes from 'prop-types';

function InterviewerList(props) {

  // Map over interviewers
  const interviewerOptions = props.interviewers.map((interviewer) => {

    return (
      <InterviewerListItem key={interviewer.id}
        name={interviewer.name}
        selected={interviewer.id === props.value}
        avatar={interviewer.avatar}
        setInterviewer={() => props.onChange(interviewer.id)}
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

// Prop Requirement
InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired
};

export default InterviewerList;