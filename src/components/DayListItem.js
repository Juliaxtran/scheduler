import React from "react";
import "./DayListItem.scss";
import classNames from "classnames";

export default function DayListItem(props) {

  const listClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0
  })

  // Spots Messaging
  const formatSpots = (spots) => {

    if (!spots) {
      return `no spots remaining`;
    }
    if (spots === 1) {
      return `${spots} spot remaining`;
    }
    return `${spots} spots remaining`
  }

  const availabityMessage = formatSpots(props.spots);

  return (
    <li className={listClass} onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular"  >{props.name}</h2>
      <h3 className="text--light" >{availabityMessage}</h3>
    </li>
  );
}

