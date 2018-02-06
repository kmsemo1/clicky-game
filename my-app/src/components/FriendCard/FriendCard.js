import React from "react";
import "./FriendCard.css";
import Score from "../Score/score";


const FriendCard = props => (
  <div className="card" onClick={this.scoreCount}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>{props.name}</strong> 
        </li>
      </ul>
    </div>
  </div>
);

export default FriendCard;
