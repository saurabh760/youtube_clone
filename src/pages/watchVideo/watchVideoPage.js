import React from 'react';
import { useParams } from 'react-router-dom';
import { VideoPlayer } from '../../components/index';
import { getUrl } from '../../utility/others';

const WatchVideoPage = () => {
  let { id } = useParams();
  return (
    <div>
      <VideoPlayer
        width={'1220'}
        height={'680'}
        src={getUrl(id)}
        title={id}
        allowFullScreen={true}
      />
    </div>
  );
};

export default WatchVideoPage;
