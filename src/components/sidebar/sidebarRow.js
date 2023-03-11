import React from 'react';
import '../../styles/sidebarRow.css';

const SidebarRow = ({ selected, title, Icons }) => {
  return (
    <div className={`sidebarRow ${selected && 'selected'}`}>
      <Icons className={`sidebarRow_icons ${selected && 'selected'}`} />
      <h2 className="sidebarRow_title">{title}</h2>
    </div>
  );
};

export default SidebarRow;
