import { Component } from "react";
import RouterComponent from "Components/RouterComponent";
import Header from "Components/Header";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <RouterComponent />
      </>
    );
  }
}

export default App;
