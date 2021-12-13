import { useProfile } from "api/profile";
import React from "react";
import { useParams } from "react-router-dom";

export default function ProfileDetailPages() {
  let params = useParams();
  const { data } = useProfile(params.id);

  return (
    <>
      {console.log(data)}
      <p>Hello</p>
    </>
  );
}
