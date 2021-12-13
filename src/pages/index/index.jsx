import useFeed from "api/feed";
import React, { useState, useRef, useCallback } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(40);

  const { feed, hasMore, loading, error } = useFeed(query, pageNumber);

  const observer = useRef();
  const lastBookElementRef = useCallback(
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
        {feed.map((book, index) => {
          if (feed.length === index + 1) {
            return (
              <div className="card" ref={lastBookElementRef} key={book}>
                {book.title}
              </div>
            );
          } else {
            return (
              <div className="card" key={book}>
                <div>
                  <img src={book.imageUrl} alt="" className="card__image" />
                </div>
                <div className="card__description">
                  <div>
                    {book.prefix} {book.name} {book.lastName}
                  </div>
                  <div>{book.title}</div>
                </div>
              </div>
            );
          }
        })}
      </div>
      <div>{loading && "Loading..."}</div>
      <div>{error && "Error"}</div>
    </>
  );
}

export default App;
