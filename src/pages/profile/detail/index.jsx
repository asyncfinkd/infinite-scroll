import { useProfile } from "api/profile";
import React from "react";
import { useParams } from "react-router-dom";

export default function ProfileDetailPages() {
  let params = useParams();
  const { data } = useProfile(params.id);

  return (
    <>
      <div class="container">
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
                <i>Customer Division Facilitator</i>
              </div>{" "}
              <br />
              <div>
                <span>Email</span>: Adriana87@hotmail.com
              </div>
              <div>
                <span>Ip Address</span>: 205.44.63.69
              </div>
              <div>
                <span>Ip Address</span>: 205.44.63.69
              </div>
              <div>
                <span>Job Area</span>: Metrics
              </div>
              <div>
                <span>Job Type</span>: Facilitator
              </div>
            </fieldset>
            <fieldset class="right-info">
              <legend>Address</legend>
              <div>
                <strong>Feest Inc LLC</strong>
              </div>
              <div>
                <span>City</span>: Lake Dewayneshire
              </div>
              <div>
                <span>Country</span>: Lao People's Democratic Republic
              </div>
              <div>
                <span>State</span>: Alaska
              </div>
              <div>
                <span>Street Address</span>: 218 Hilll Viaduct
              </div>
              <div>
                <span>ZIP</span>: 64894
              </div>
            </fieldset>
          </div>{" "}
        </div>
      </div>
    </>
  );
}
