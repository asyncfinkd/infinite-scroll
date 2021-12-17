import React from 'react'

export default function ProfileDetailAddressModule({ data }) {
  return (
    <>
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
    </>
  )
}
