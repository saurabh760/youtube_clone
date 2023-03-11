import React from "react";

const ImageComponent = ({
  alt,
  className,
  height,
  id,
  onClick,
  src,
  srcSet,
  title,
  width,
}) => {
  return (
    <img
      alt={alt}
      className={className}
      height={height}
      id={id}
      onClick={onClick}
      srcSet={srcSet}
      title={title}
      width={width}
      src={src}
    />
  );
};

export default ImageComponent;
