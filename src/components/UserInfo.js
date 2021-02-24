import React from "react";

const UserInfo = (props) => {
    const {avatarURL, name} = props
  return (
    <div className="user-info">
      <img src={avatarURL} />
      <div>{name}</div>
    </div>
  );
};

export default UserInfo;
