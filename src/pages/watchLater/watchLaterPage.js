import React from 'react';
import { MoreVertIcon, DeleteOutlineIcon } from '../../constants/iconConstants';
import { constants } from '../../constants/constants';
import { useSelector } from 'react-redux';
import WatchLaterVideoList from './watchLaterVideoList';
import '../../styles/videos.css';

const WatchLaterPage = () => {
  const items = useSelector(
    (state) => state?.watchLaterData?.watchLaterData || [],
  );

  const { popover } = constants || {};
  const { watchLaterLabel } = popover || {};
  return (
    <div>
      {items &&
        items.map((value) => (
          <WatchLaterVideoList
            id={value?.data?.id}
            title={value?.data?.title}
            description={value?.data?.description}
            icon={<MoreVertIcon />}
            listIcon={<DeleteOutlineIcon />}
            image={value?.data?.image}
            channel={value?.data?.channel}
            watchLaterLabel={watchLaterLabel}
          />
        ))}
    </div>
  );
};

export default WatchLaterPage;
