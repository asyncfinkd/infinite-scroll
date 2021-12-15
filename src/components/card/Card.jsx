import React from 'react'
import { Link } from 'react-router-dom'
import { String } from 'shared/toString'

export default function Card({ item }) {
  const { prefix, name, lastName, id, imageUrl, title } = item

  return (
    <>
      <Link style={{ textDecoration: 'none' }} to={`profile/${String(id)}`}>
        <div className="card" key={item}>
          <div>
            <img src={imageUrl} alt="" className="card__image" />
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
