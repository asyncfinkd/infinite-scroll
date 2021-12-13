import React from "react";
import { Link } from "react-router-dom";
import { String } from "shared/toString";

export default function Card({ item }) {
  return (
    <>
      <Link style={{ textDecoration: "none" }} to={String(item.id)}>
        <div className="card" key={item}>
          <div>
            <img src={item.imageUrl} alt="" className="card__image" />
          </div>
          <div className="card__description">
            <div>
              {item.prefix} {item.name} {item.lastName}
            </div>
            <div>{item.title}</div>
          </div>
        </div>
      </Link>
    </>
  );
}
