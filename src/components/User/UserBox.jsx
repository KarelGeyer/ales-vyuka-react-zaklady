import React from "react";

const UserBox = ({ username, adress, email }) => {
  return (
    <div>
      <p>{username}</p>
      <p>{adress}</p>
      <p>{email}</p>
    </div>
  );
};

export default UserBox;
