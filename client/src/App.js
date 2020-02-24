import React from "react";
import axios from "axios";

import "./styles.scss";
import PlayerList from "./components/PlayerList";
import NavBar from "./components/NavBar";

class App extends React.Component {
  state = {
    players: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        console.log("players: ", res);
        this.setState({
          players: res.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header"> */}
        {/* <h1>World Cup App</h1> */}
        {/* </header> */}
        <NavBar />
        <div className="Players">
          <p>&nbsp;</p>
          <h2>Player List</h2>

          <PlayerList players={this.state.players} />
        </div>
      </div>
    );
  }
}

export default App;
