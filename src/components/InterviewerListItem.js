import React from 'react';
import "./InterviewerListItem.scss";

function InterviewerListItem(){
return (
<li className="interviewers__item">
  <img
    className="interviewers__item-image"
    src="https://i.imgur.com/LpaY82x.png"
    alt="Sylvia Palmer"
  />
  Sylvia Palmer
</li>
);
}

export default InterviewerListItem;