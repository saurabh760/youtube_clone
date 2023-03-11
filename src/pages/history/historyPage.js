import React from 'react';
import HistoryVideoList from './historyVideoList';
import { useSelector } from 'react-redux';
import { MoreVertIcon, DeleteOutlineIcon } from '../../constants/iconConstants';
import { constants } from '../../constants/constants';
import '../../styles/videos.css';

const HistoryPage = () => {
  const items = useSelector((state) => state?.historyData?.historyData || []);

  const { popover } = constants || {};
  const { removeHistoryLabel } = popover || {};

  return (
    <div>
      {items &&
        items?.length > 0 &&
        items.map((value) => (
          <HistoryVideoList
            id={value?.data?.id}
            title={value?.data?.title}
            icon={<MoreVertIcon />}
            listIcon={<DeleteOutlineIcon />}
            image={value?.data?.image}
            description={value?.data?.description}
            removeItemLabel={removeHistoryLabel}
          />
        ))}
    </div>
  );
};

export default HistoryPage;
