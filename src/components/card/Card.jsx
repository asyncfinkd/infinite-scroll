import { ApplicationContext } from 'context/ApplicationContext'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { String } from 'shared/toString'

export default function Card({ item, index }) {
  const { contextValue } = useContext(ApplicationContext)

  const { prefix, name, lastName, id, imageUrl, title } = item

  return (
    <>
      <Link
        style={{ textDecoration: 'none' }}
        to={`profile/${String(id)}`}
        onClick={() => {
          contextValue.push(item)
        }}
      >
        <div className="card" key={item}>
          <div>
            <img
              src={`${imageUrl}?v=${index}`}
              alt=""
              className="card__image"
            />
          </div>
          <div className="card__description">
            <div>
              {prefix} {name} {lastName}
            </div>
            <div>{title}</div>
          </div>
        </div>
      </Link>
    </>
  )
}
