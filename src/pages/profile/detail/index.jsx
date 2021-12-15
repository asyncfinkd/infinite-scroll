import { useProfile } from 'api/profile'
import ProfileCard from 'components/card/ProfileCard'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import ScaleLoader from 'react-spinners/ScaleLoader'
import { override } from 'styles/spinner'

export default function ProfileDetailPages() {
  let pathname = useLocation()
  let params = useParams()

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

  const { prefix, name, lastName, title, email, ip, jobArea, jobType } = data
  return (
    <>
      <div class="profile__container">
        <div class="header-wrapper">
          <div class="header">
            <img
              src="http://placeimg.com/640/480/animals?v=1"
              alt={`${name} ${lastName}`}
            />
            <fieldset class="left-info">
              <legend>Info</legend>
              <div>
                <strong>
                  {prefix} {name} {lastName}
                </strong>
              </div>
              <div>
                <i>{title}</i>
              </div>{' '}
              <br />
              <div>
                <span>Email</span>: {email}
              </div>
              <div>
                <span>Ip Address</span>: {ip}
              </div>
              <div>
                <span>Job Area</span>: {jobArea}
              </div>
              <div>
                <span>Job Type</span>: {jobType}
              </div>
            </fieldset>
            <fieldset class="right-info" style={{ marginLeft: '5px' }}>
              <legend>Address</legend>
              <div>
                <strong>
                  {data?.company?.name} {data?.company?.name}
                </strong>
              </div>
              <div>
                <span>City</span>: {data?.address?.city}
              </div>
              <div>
                <span>Country</span>: {data?.address?.country}
              </div>
              <div>
                <span>State</span>: {data?.address?.state}
              </div>
              <div>
                <span>Street Address</span>: {data?.address?.streetAddress}
              </div>
              <div>
                <span>ZIP</span>: {data?.address?.zipCode}
              </div>
            </fieldset>
          </div>
          <div>
            <div class="breadcrumbs"></div>
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
                        <ProfileCard item={item} />
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
