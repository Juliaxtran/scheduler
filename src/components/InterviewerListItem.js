import React from 'react';
import "./InterviewerListItem.scss";
import classNames from "classnames";






function InterviewerListItem(props){

  const listClass = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected
  })

return (
<li onClick={()=> props.setInterviewer(props.id)} key={props.id} className={listClass}>
  <img
    className="interviewers__item-image"
    src={props.avatar}
    alt={props.name}
  />
 {props.name}
</li>
);
}

export default InterviewerListItem;