import { useFeed } from 'api/feed';
import Card from 'components/card/Card';
import React, { useState, useRef, useCallback } from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { override } from 'styles/spinner';

function App() {
  const [query, setQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [listPage, setListPage] = useState(20);

  const { feed, hasMore, loading } = useFeed(query, pageNumber, listPage);

  const observer = useRef();
  const lastFeedElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore],
  );

  return (
    <>
      <div className="container">
        {feed.map((item, index) => {
          if (feed.length === index + 1) {
            return (
              <>
                <div key={item} ref={lastFeedElementRef}></div>
              </>
            );
          } else {
            return <Card item={item} />;
          }
        })}
      </div>
      <ScaleLoader
        color={'lightgray'}
        loading={loading}
        css={override}
        size={150}
      />
    </>
  );
}

export default App;
