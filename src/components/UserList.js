import React from "react";
import { useNavigate } from "react-router-dom";

const UserList = ({ data }) => {
  const navigate = useNavigate();
  function handleClick(){
    navigate(`/${data.id}`)
    navigate('/')
  }
  return (
    <>
    <div
      className="inner-box"
      onClick={handleClick}
    >
      <div className="border-2  p-2 rounded h-20 md:h-auto mx-2 border-gray-500">
        <img
          src={data.avatar}
          alt={data.profile.username}
          className="w-16 h-16 rounded-full"
        ></img>
      </div>
      <div className="flex flex-col gap-3 justify-center text-xs sm:text-base md:text-base lg:text-lg">
        <p className="flex gap-5">
          <span className="font-bold textcolor ">Name:</span>
          {data.profile.firstName} {data.profile.lastName}
        </p>
        <p className="flex gap-2">
          <span className="font-bold textcolor">JobTitle:</span>
          {data.jobTitle}
        </p>
        <p className="text-xs text-yellow-600 underline hover:text-yellow-500">
          Click for more info.....
        </p>
      </div>
    </div>
    </>
  );
};

export default UserList;
