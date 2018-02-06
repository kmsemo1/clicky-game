import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Score from "./components/Score/Score";
import "./App.css";

 
class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0
  };

  addPoint = (id) => {
    this.setState({ score: this.state.score + 1 });
    console.log(this.state.score);
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div className="container">
      <Score addPoint={this.state.score} />
      <Wrapper>
        <Title>Click on an image once to score. But lose if image is clicked on more than once.</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            addPoint={this.addPoint}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}

          />
        ))}
      </Wrapper>
      </div>
    );
  }
}


export default App;
