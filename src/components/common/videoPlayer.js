import React from 'react';

const VideoPlayer = ({
  width,
  height,
  src,
  title,
  allowFullScreen,
  className,
}) => {
  return (
    <div className={className}>
      <iframe
        width={width}
        height={height}
        src={src}
        title={title}
        allowFullScreen={allowFullScreen}
      />
    </div>
  );
};

export default VideoPlayer;
