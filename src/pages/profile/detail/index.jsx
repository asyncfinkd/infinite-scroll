import { useProfile } from "api/profile";
import React from "react";
import { useParams } from "react-router-dom";

export default function ProfileDetailPages() {
  let params = useParams();
  const { data } = useProfile(params.id);

  const { prefix, name, lastName, title, email, ip, jobArea, jobType } = data;
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
                  {prefix} {name} {lastName}
                </strong>
              </div>
              <div>
                <i>{title}</i>
              </div>{" "}
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
            <fieldset class="right-info" style={{ marginLeft: "5px" }}>
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
            <h2 style={{ marginLeft: "10px" }}>Friends:</h2>
            <div class="users">
              <div class="list">
                <div class="list-item">
                  <div class="list-item-content">
                    <img
                      src="http://placeimg.com/640/480/animals?v=3"
                      alt="Sonya Keeling"
                    />
                    <div class="list-item-content-description">
                      <strong>Miss Sonya Keeling</strong>
                    </div>
                    <div class="list-item-content-description">
                      Legacy Creative Agent
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
