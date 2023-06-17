import "./App.css";
import React from "react";
import Life from "./Life";
class App extends React.Component {
  state = {
    fullname: "Adam neili",
    bio: "hellow",
    image:
      "https://purepng.com/public/uploads/large/purepng.com-fortnite-ravenfortnitefortnite-battle-royalebattle-royaleepic-gamesgames-1251525436109rzdos.png",
    profession: "student",
    show: false,
  };

  render() {
    const handelshow = () => {
      this.setState({ show: !this.state.show });
    };
    return (
      <div className="App">
        <button onClick={handelshow}>
          {this.state.show ? "hide" : "show"}
        </button>
        {this.state.show ? (
          <div>
            {" "}
            <Life />
            <h1>{this.state.fullname}</h1>
            <h2>{this.state.bio}</h2>
            <img src={this.state.image} alt="pic1" />
            <h4>{this.state.profession}</h4>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default App;
