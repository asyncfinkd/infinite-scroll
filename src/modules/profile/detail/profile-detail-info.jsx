import React from 'react'

export default function ProfileDetailInfoModule({
  prefix,
  title,
  name,
  lastName,
  email,
  ip,
  jobArea,
  jobType,
}) {
  return (
    <>
      <fieldset class="left-info">
        <legend>Info</legend>
        <div>
          <strong>
            {prefix} {name} {lastName}
          </strong>
        </div>
        <div>
          <i>{title}</i>
        </div>{' '}
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
    </>
  )
}
