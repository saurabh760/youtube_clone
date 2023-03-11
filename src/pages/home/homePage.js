import React, { useEffect, useState } from 'react';
import { constants } from '../../constants/constants';
import { getListResult } from '../../apis/searchApi';
import { Col } from 'react-bootstrap';
import VideoCard from './videoCardPage';
import '../../styles/homePage.css';
import FullScreenLoader from '../../components/common/fullScreenLoader';

const Home = () => {
  const [state, setState] = useState({
    data:[],
    isLoading: false});
  const {data, isLoading} = state

  const { popover } = constants || {};
  const { watchLaterLabel } = popover || {};

  const getApiData = () => {
    setState((state)=>({
      ...state,
      isLoading: true,
    }))
    const body={
      w: 'hollywood movie'
    }
    
    getListResult(body).then((res) => {
      setState((state)=>({
        ...state,
        isLoading: false,
        data: res?.data?.items
      }))
    })
    .catch((e) => {
      setState((state)=>({
        ...state,
        isLoading: false,
      }))
      alert('Something wents wrong!');

    });
  };
  useEffect(() => {
    getApiData();
  }, []);


  return (
    <div className="MainVideoDashBoard">
            

      <div className="MainVideoDashBoard_videos row">
      {isLoading && <FullScreenLoader />}
        {data &&
          data?.length > 0 ?
          data.map((value, index) => (
            <Col md="2" key={index}>
              <VideoCard
                title={value?.snippet?.channelTitle}
                id={value?.id?.videoId}
                description={value?.snippet?.description}
                views="5.5M Views"
                timestamp={value?.snippet?.publishTime}
                image={value?.snippet?.thumbnails?.medium?.url}
                watchLaterLabel={watchLaterLabel}
                channel="demo"
              />
            </Col>
          )): <h3>
            No data found.
          </h3> }
      </div>
    </div>
  );
};

export default Home;
