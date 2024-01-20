import React from "react";

const UserProfile = ({ accountName, fullName, email }) => {
  return (
    <div className="content tracking-wider ">
      <p className="text-white ">{accountName}</p>
      <p className="text-[#bdc1c6]">{fullName}</p>
      <p className="text-[#bdc1c6]">{email}</p>
    </div>
  );
};

export default UserProfile;
