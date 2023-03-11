import React from 'react';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';

const CustomPopover = ({
  headerTitle,
  handleToggle,
  target,
  ref,
  show,
  handleNavigate,
  icon,
  listIcon,
  listItemName,
}) => {
  return (
    <div ref={ref}>
      <div onClick={handleToggle}>{icon}</div>
      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={20}>
        <Popover id="popover-contained">
          <Popover.Header as="h3">{headerTitle}</Popover.Header>
          <div onClick={handleNavigate}>
          <Popover.Body >
            {listIcon} <strong>{listItemName}</strong>
          </Popover.Body>
          </div>
        </Popover>
      </Overlay>
    </div>
  );
};

export default CustomPopover;
