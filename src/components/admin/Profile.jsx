import React from "react";
import banner from "../../images/banner.jpg";

const Profile = () => {
  return (
    <div
      className="w-full h-[300px] bg-no-repeat bg-center bg-cover relative mt-12 "
      style={{ backgroundImage: `url(${banner})` }}
    ></div>
  );
};

export default Profile;
