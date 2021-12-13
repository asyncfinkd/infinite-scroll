import useFeed from "api/feed";
import React, { useState, useRef, useCallback } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(40);

  const { feed, hasMore, loading } = useFeed(query, pageNumber);

  const observer = useRef();
  const lastFeedElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          if (pageNumber !== 100) {
            if (pageNumber === 80) {
              setPageNumber((prevPageNumber) => prevPageNumber + 20);
            } else {
              setPageNumber((prevPageNumber) => prevPageNumber + 40);
            }
          }
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <>
      <div className="container">
        {feed.map((item, index) => {
          if (feed.length === index + 1) {
            return (
              <div className="card" ref={lastFeedElementRef} key={item}>
                {item.title}
              </div>
            );
          } else {
            return (
              <div className="card" key={item}>
                <div>
                  <img src={item.imageUrl} alt="" className="card__image" />
                </div>
                <div className="card__description">
                  <div>
                    {item.prefix} {item.name} {item.lastName}
                  </div>
                  <div>{item.title}</div>
                </div>
              </div>
            );
          }
        })}
      </div>
      <div>{loading && "Loading..."}</div>
    </>
  );
}

export default App;
