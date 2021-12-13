import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function useFeed(query, pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [feed, setFeed] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setFeed([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: "GET",
      url: `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/0/${pageNumber}`,
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setFeed(res.data.list);
        setHasMore(res.data.list.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
        toast.error("Server Error");
      });
    return () => cancel();
  }, [query, pageNumber]);

  return { loading, error, feed, hasMore };
}
