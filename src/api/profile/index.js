import { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

export function useProfile(query, feedQuery, pageNumber, listPage) {
  const [data, setData] = useState([])
  const [friendsFeed, setFriendsFeed] = useState([])
  const [hasMore, setHasMore] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setFriendsFeed([])
  }, [query])

  useEffect(() => {
    axios({
      method: 'GET',
      url: `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${query}`,
    }).then((result) => {
      setData(result.data)
    })
  }, [query])

  useEffect(() => {
    setLoading(true)
    let cancel
    axios({
      method: 'GET',
      url: `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${query}/friends/${pageNumber}/${listPage}`,
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        res.data.list.map((item) => {
          friendsFeed.push(item)
        })
        setHasMore(res.data.list.length > 0)
        setLoading(false)
      })
      .catch((e) => {
        if (axios.isCancel(e)) return
        toast.error('Server Error')
      })
    return () => cancel()
  }, [feedQuery, pageNumber, listPage, friendsFeed])

  return { data, loading, friendsFeed, hasMore }
}
