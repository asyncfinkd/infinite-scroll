import React from "react";
import { Link } from "react-router-dom";
import { String } from "shared/toString";

export default function ProfileCard({ item }) {
  return (
    <>
      <div class="list-item">
        <Link
          style={{ textDecoration: "none" }}
          to={`/profile/${String(item.id)}`}
        >
          <div class="list-item-content">
            <img
              src="http://placeimg.com/640/480/animals?v=3"
              alt={`${item.name} ${item.lastName}`}
            />
            <div class="list-item-content-description">
              <strong>
                {item.prefix} {item.name} {item.lastName}
              </strong>
            </div>
            <div class="list-item-content-description">{item.title}</div>
          </div>
        </Link>
      </div>
    </>
  );
}
