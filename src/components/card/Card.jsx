import React from "react";

export default function Card({ item }) {
  return (
    <>
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
    </>
  );
}
