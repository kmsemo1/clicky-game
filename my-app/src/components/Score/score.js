import React from "react";

class Score extends React.Component {
    state = {
      score: 0
    };

    scoreCount = () => {
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
                <a class="navbar-brand" href="#">Clicky Game</a>
              </div>
              
              <div class="navbar-header navbar-right">
                <a class="navbar-brand" onClick={this.state.count}>Score:    </a>
                <a class="navbar-brand">|| Top Scpre:    </a>
              </div>
            </div>
          </nav>
          )
      }
    }
