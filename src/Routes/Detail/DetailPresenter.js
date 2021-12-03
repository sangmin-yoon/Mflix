import React, { Suspense } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import { Helmet } from "react-helmet-async";
import Message from "Components/Message";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0px;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  height: 100%;
`;

const Cover = styled.div`
  width: 30%;
  height: 100%;
  margin-right: 20px;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
  height: 100%;
  overflow: auto;
`;

const Title = styled.h3`
  font-size: 32px;
  margin-bottom: 10px;
`;

const SubTitle = styled.h4`
  font-size: 25px;
  margin-bottom: 15px;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 70%;
  margin-bottom: 25px;
`;

const Imdb = styled.a`
  background-color: #e2b616;
  display: inline;
  color: black;
  font-weight: 700;
  border-radius: 5px;
  padding: 3px;
`;

const CompaniWrap = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  border-radius: 5px;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 0px 10px;
  margin-bottom: 25px;
`;

const CompaniBox = styled.div`
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  :not(:last-child) {
    margin-right: 30px;
  }
`;

const CompaniImg = styled.div`
  background: url(${(props) => props.bgImage});
  height: 100%;
  width: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  margin-bottom: 10px;
`;

const VideoWrap = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  border-radius: 5px;
  align-items: center;

  /* background-color: rgba(255, 255, 255, 0.1); */
  padding: 0px 10px;
`;

const Video = styled.iframe`
  height: 700px;
  width: 100%;
`;

const DetailPresenter = ({ result, loading, error }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading | Mflix</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <Container>
      <Helmet>
        <title>{result?.title || result?.name} | Mflix</title>
      </Helmet>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require("../../assets/Noimage.png").default
          }
        />
        <Data>
          <Title>{result?.title || result?.name}</Title>
          <ItemContainer>
            <Item>{result?.release_date || result?.first_air_date}</Item>
            <Divider>•</Divider>
            <Item>{result?.runtime || result?.episode_run_time?.[0]}분</Item>
            <Divider>•</Divider>
            <Item>
              {result?.genres?.map((genre, index) =>
                index === result.genres.length - 1
                  ? genre.name
                  : `${genre.name} / `
              )}
              {result?.imdb_id && (
                <>
                  <Divider>•</Divider>
                  <Item>
                    <Imdb
                      href={`https://www.imdb.com/title/${result.imdb_id}/?ref_=rlm`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      IMDB
                    </Imdb>
                  </Item>
                </>
              )}
            </Item>
          </ItemContainer>
          <Overview>{result?.overview}</Overview>
          <SubTitle>제작사</SubTitle>
          <CompaniWrap>
            {result?.production_companies?.map((compani) => (
              <CompaniBox key={compani.id}>
                <CompaniImg
                  bgImage={`https://image.tmdb.org/t/p/original${compani.logo_path}`}
                />
                <span>{compani.name}</span>
              </CompaniBox>
            ))}
          </CompaniWrap>
          <SubTitle>관련 영상</SubTitle>
          <VideoWrap>
            {result?.videos?.results[0]?.key ? (
              <Video
                src={`https://www.youtube.com/embed/${result?.videos?.results[0]?.key}`}
              />
            ) : (
              <Message text="***** 영상이 존재하지 않습니다ㅠㅠ *****" />
            )}
          </VideoWrap>
        </Data>
      </Content>
    </Container>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default DetailPresenter;
