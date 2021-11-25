import { Component } from "react";
import RouterComponent from "Components/RouterComponent";
import GlobalStyles from "Components/GlobalStyles";

class App extends Component {
  render() {
    return (
      <>
        <RouterComponent />
        <GlobalStyles />
      </>
    );
  }
}

export default App;
