import { moviesApi, tvApi } from "api";
import React from "react";
import { useLocation, useParams } from "react-router";
import DetailPresenter from "./DetailPresenter";

const withParams = (Child) => {
  return (props) => {
    const params = useParams();
    const location = useLocation();
    return <Child {...props} params={params} location={location} />;
  };
};

class DetailContainer extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/"),
    };
  }

  async componentDidMount() {
    const {
      params: { id },
    } = this.props;
    const { isMovie } = this.state;

    const NumberId = Number(id);
    if (isNaN(NumberId)) {
      alert("잘못된 페이지입니다.");
      window.location.href = "/";
    }
    let result = null;
    if (isMovie) {
      try {
        if (isMovie) {
          ({ data: result } = await moviesApi.movieDetail(NumberId));
        } else {
          ({ data: result } = await tvApi.showDetail(NumberId));
        }
      } catch {
        this.setState({ error: "정보를 찾을 수 없습니다 ㅠㅠ" });
      } finally {
        this.setState({ loading: false, result });
      }
    }
  }

  render() {
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}

export default withParams(DetailContainer);
