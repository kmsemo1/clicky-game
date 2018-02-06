import React from "react";
import "./score.css";

const Score = props => (
    <nav class="navbar navbar-default">
    <div class="container-fluid">
      
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
          aria-expanded="false">
        </button>
        <a class="navbar-brand" className="display"><strong>Clicky Game</strong></a>
      </div>
      
      <div class="navbar-header navbar-right">
        <a class="navbar-brand" className="display"><strong>Score:{props.addPoint}</strong></a>
        
      </div>
    </div>
  </nav>
);


export default Score;