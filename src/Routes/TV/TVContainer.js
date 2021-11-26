import React from "react";
import TVPresenter from "./TVPresenter";

class TVContainer extends React.Component {
  state = {
    topRated: null,
    popular: null,
    airing: null,
    error: null,
    loading: true,
  };

  render() {
    const { topRated, popular, airing, loading, error } = this.state;
    return (
      <TVPresenter
        topRated={topRated}
        popular={popular}
        airing={airing}
        loading={loading}
        error={error}
      />
    );
  }
}

export default TVContainer;
