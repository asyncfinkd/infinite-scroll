import { useEffect, useState } from "react";
import axios from "axios";

export function useProfile(query) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${query}`,
    }).then((result) => {
      setData(result.data);
    });
  }, [query]);

  return { data };
}
