import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const useSetPopover = (watchLater, addHistory) => {
  const [state, setState] = useState({
    show: false,
    target: null,
  });
  const ref = useRef(null);

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const { show, target } = state || {};

  const handleToggle = (event) => {
    setState({ ...state, show: !show, target: event?.target });
  };

  const handleNavigate = () => {
    setState({ ...state, show: false });
    dispatch(watchLater);
  };
  const handleClick = (id) => {
    navigate(`/watch/${id}`);
    dispatch(addHistory);
  };

  const handleWatchVideo = (id) => {
    navigate(`/watch/${id}`);
  };

  return {
    handleToggle,
    handleNavigate,
    target,
    show,
    ref,
    handleClick,
    handleWatchVideo,
  };
};

export { useSetPopover };
