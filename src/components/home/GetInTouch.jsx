import React from "react";

const GetInTouch = ({ heading, message, email }) => {
  return (
    <>
      <h2 className="display-4 pb-3 text-center">{heading}</h2>
      <p className="lead text-center pb-3">
        {message}.
      </p>
      <p>
      <bold>Email:</bold> <a className="text-decoration-none" href={`mailto:${email}`}>{email}</a>
      </p>
      <p>
        <bold>Phone:</bold>(763)-898-7922
      </p>
    </>
  );
};

export default GetInTouch;
