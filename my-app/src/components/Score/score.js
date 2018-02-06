import React from "react";

class Score extends React.Component {
    state = {
      score: 0
    };

    addPoint = () => {
        this.setState({ count: this.state.count + 1 });
      };
      render () {
          return (
            <nav class="navbar navbar-default">
            <div class="container-fluid">
              
              <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
                  aria-expanded="false">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand">Clicky Game</a>
              </div>
              
              <div class="navbar-header navbar-right">
                <a class="navbar-brand">Score:{this.state.count}</a>
                <a class="navbar-brand">  || Top Score:    </a>
              </div>
            </div>
          </nav>
          )
      }
    }

    export default Score;