import React from 'react';
import { useSelector } from 'react-redux';
import { constants } from '../../constants/constants';
import Videos from './videos';

const SearchResultPage = () => {
  const result = useSelector(
    (state) => state?.searchResult?.searchResults || [],
  );

  const { popover } = constants || {};
  const { watchLaterLabel } = popover || {};

  return (
    <div>
      {result &&
        result?.length > 0 &&
        result.map((value) => (
          <>
            <Videos
              id={value?.id?.videoId}
              title={value?.snippet?.title}
              description={value?.snippet?.description}
              watchLaterLabel={watchLaterLabel}
              image={value?.snippet?.thumbnails?.medium?.url}
              channel={value?.snippet?.channelTitle}
            />
          </>
        ))}
    </div>
  );
};

export default SearchResultPage;
