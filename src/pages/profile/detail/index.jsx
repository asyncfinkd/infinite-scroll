import { useProfile } from "api/profile";
import React from "react";
import { useParams } from "react-router-dom";

export default function ProfileDetailPages() {
  let params = useParams();
  const { data } = useProfile(params.id);

  return (
    <>
      <div class="profile__container">
        <div class="header-wrapper">
          <div class="header">
            <img
              src="http://placeimg.com/640/480/animals?v=1"
              alt="Angie Olson"
            />
            <fieldset class="left-info">
              <legend>Info</legend>
              <div>
                <strong>
                  {data.prefix} {data.name} {data.lastName}
                </strong>
              </div>
              <div>
                <i>{data.title}</i>
              </div>{" "}
              <br />
              <div>
                <span>Email</span>: {data.email}
              </div>
              <div>
                <span>Ip Address</span>: {data.ip}
              </div>
              <div>
                <span>Job Area</span>: {data.jobArea}
              </div>
              <div>
                <span>Job Type</span>: {data.jobType}
              </div>
            </fieldset>
            <fieldset class="right-info" style={{ marginLeft: "5px" }}>
              <legend>Address</legend>
              <div>
                <strong>
                  {data?.company?.name} {data?.company?.suffix}
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
          </div>{" "}
        </div>
      </div>
    </>
  );
}
