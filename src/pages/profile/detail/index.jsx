import { useProfile } from 'api/profile'
import ProfileCard from 'components/card/ProfileCard'
import { ApplicationContext } from 'context/ApplicationContext'
import ProfileDetailAddressModule from 'modules/profile/detail/profile-detail-address'
import ProfileDetailInfoModule from 'modules/profile/detail/profile-detail-info'
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import ScaleLoader from 'react-spinners/ScaleLoader'
import { override } from 'styles/spinner'

export default function ProfileDetailPages() {
  let pathname = useLocation()
  let params = useParams()

  const { contextValue } = useContext(ApplicationContext)

  const [query, setQuery] = useState('')
  const [pageNumber, setPageNumber] = useState(1)
  const [listPage, setListPage] = useState(20)

  const { data, friendsFeed, loading, hasMore } = useProfile(
    params.id,
    query,
    pageNumber,
    listPage,
  )

  const observer = useRef()
  const lastFeedElementRef = useCallback(
    (node) => {
      if (loading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1)
        }
      })
      if (node) observer.current.observe(node)
    },
    [loading, hasMore],
  )

  useEffect(() => {
    setPageNumber(0)
  }, [pathname])

  const { name, lastName } = data
  return (
    <>
      <div class="profile__container">
        <div class="header-wrapper">
          <div class="header">
            <img
              src="http://placeimg.com/640/480/animals?v=1"
              alt={`${name} ${lastName}`}
            />
            <ProfileDetailInfoModule {...data} />
            <ProfileDetailAddressModule data={data} />
          </div>
          <div>
            <div class="breadcrumbs">
              {contextValue.map((item, i) => {
                return (
                  <>
                    {i > 0 ? ' > ' : ''}
                    <Link to={`/profile/${item.id}`}>
                      {item.prefix} {item.name} {item.lastName}
                    </Link>
                  </>
                )
              })}
            </div>
            <h2 style={{ marginLeft: '10px' }}>Friends:</h2>
            <div class="users">
              <div class="list">
                {friendsFeed?.map((item, index) => {
                  if (friendsFeed?.length === index + 1) {
                    return (
                      <>
                        <div key={item} ref={lastFeedElementRef}></div>
                      </>
                    )
                  } else {
                    return (
                      <>
                        <ProfileCard index={index} item={item} />
                      </>
                    )
                  }
                })}
                <ScaleLoader
                  color={'lightgray'}
                  loading={loading}
                  css={override}
                  size={150}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
