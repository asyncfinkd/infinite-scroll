import { ApplicationContext } from 'context/ApplicationContext'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { String } from 'shared/toString'

export default function ProfileCard({ item, index }) {
  const { contextValue } = useContext(ApplicationContext)

  const { id, name, lastName, prefix, title } = item

  return (
    <>
      <div
        class="list-item"
        onClick={() => {
          contextValue.push(item)
        }}
      >
        <Link style={{ textDecoration: 'none' }} to={`/profile/${String(id)}`}>
          <div class="list-item-content">
            <img
              src={`http://placeimg.com/640/480/animals?=${index}`}
              alt={`${name} ${lastName}`}
            />
            <div class="list-item-content-description">
              <strong>
                {prefix} {name} {lastName}
              </strong>
            </div>
            <div class="list-item-content-description">{title}</div>
          </div>
        </Link>
      </div>
    </>
  )
}
