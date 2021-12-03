import { Component } from "react";
import RouterComponent from "Components/RouterComponent";
import GlobalStyles from "Components/GlobalStyles";
import { HelmetProvider } from "react-helmet-async";

class App extends Component {
  render() {
    return (
      <>
        <HelmetProvider>
          <RouterComponent />
          <GlobalStyles />
        </HelmetProvider>
      </>
    );
  }
}

export default App;
