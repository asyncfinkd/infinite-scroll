import { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import env from 'constants/environment/env.json'

export function useFeed(query, pageNumber, listPage) {
  const [loading, setLoading] = useState(true)
  const [feed, setFeed] = useState([])
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setFeed([])
  }, [query])

  useEffect(() => {
    setLoading(true)
    let cancel
    axios({
      method: 'GET',
      url: `${env.SERVER_URL}/user/${pageNumber}/${listPage}`,
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        if (feed.length > 0) {
          res.data.list.map((item) => {
            feed.push(item)
          })
        } else {
          setFeed(res.data.list)
        }
        setHasMore(res.data.list.length > 0)
        setLoading(false)
      })
      .catch((e) => {
        if (axios.isCancel(e)) return
        toast.error('Server Error')
      })
    return () => cancel()
  }, [query, listPage, pageNumber])

  return { loading, feed, hasMore }
}
