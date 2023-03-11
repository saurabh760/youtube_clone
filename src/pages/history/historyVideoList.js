import React from 'react';
import { Popover, Image } from '../../components';
import { removeHistory } from '../../actions/addHistory';
import { useSetPopover } from '../../hooks/useSetPopover';
import '../../styles/videos.css';

const HistoryVideoList = ({
  id,
  title,
  icon,
  listIcon,
  image,
  removeItemLabel,
  description,
}) => {
  const { handleToggle, ref, target, show, handleNavigate, handleWatchVideo } =
    useSetPopover(removeHistory(id));

  return (
    <div className="vid-card">
      <div className="d-flex" onClick={() => handleWatchVideo(id)}>
        <Image className="img" src={image} />
        <div className="title">
          {title}
          <div className="sub-title"> 27M views 1 year ago</div>
          <div className="text">{description}</div>
        </div>
      </div>
      <Popover
        handleToggle={handleToggle}
        show={show}
        target={target}
        ref={ref}
        handleNavigate={() => handleNavigate(id)}
        icon={icon}
        listIcon={listIcon}
        listItemName={removeItemLabel}
      />
    </div>
  );
};

export default HistoryVideoList;
