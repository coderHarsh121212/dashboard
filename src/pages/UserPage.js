import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useResponse from "../useAxios/useResponse";

const UserPage = () => {
  const { id } = useParams();
  const { response } = useResponse("/users");

  function findId(id) {
    if (id == 11) {
      return +id - 2;
    }

    if (id == 12) {
      return 10;
    }
    if (id == 23) {
      return id;
    }
    if (id > 23 && id < 44) {
      return +id - 2;
    }
    if (id >= 44 && id < 68) {
      return +id - 1;
    }
    if (id >= 68 && id < 72) {
      return +id;
    }
    if (id >= 72) {
      return +id + 1;
    } else {
      return +id - 1;
    }
  }
  return (
    <div className="w-full backgr md:h-[100vh] md:pb-20  h-fit ">
      <h1 className="headtext">
        User Info
      </h1>
    {!response.length==0? <div className=" md:h-[90vh] h-full">
        {response[id] ? (
          <div className="w-full h-full flex flex-col gap-3">
         
            <div className="w-full flex flex-col items-center gap-1">
              <div className="border-4 p-2 w-1/2 rounded-md border-gray-500">
                <img
                  src={response[findId(id)].avatar}
                  alt="Not found"
                  className="w-full rounded-md"
                ></img>
              </div>
              <p className="font-serif font-bold flex gap-2 textcolor text-lg">
                <span> {response[findId(id)].profile.firstName}</span>
                <span>{response[findId(id)].profile.lastName}</span>
              </p>
              <p className="font-serif font-bold textcolor text-lg">
                {response[findId(id)].jobTitle}
              </p>
            </div>
            <div className="w-full p-4 flex-col flex gap-1 text-white font-bold">
              <h1 className="text-center font-mono font-extrabold text-orange-400 text-xl">
                Other <span className="text-yellow-500">Info....</span>
              </h1>
              <p className="full-head">
                <span className="head-sub">Username :</span>
                {response[findId(id)].profile.username}
              </p>
              <p className="full-head">
                <span className="head-sub">Email :</span>
                {response[findId(id)].profile.email}
              </p>

              <p className="full-head">
                <span className="head-sub">Bio:</span>
                {response[findId(id)].Bio}
              </p>
              <p className="full-head">
                <span className="head-sub">Created At:</span>
                {response[findId(id)].createdAt}
              </p>
            </div>
          </div>
        ) : (
          <div className="w-full flex items-center justify-center h-[70vh]">
            <p className="text-3xl font-bold textcolor">Click on a User Profile....</p>
          </div>
        )}
      </div>:
      <div className='w-full bg-gray-700  md:pb-20 h-[97%] flex items-center justify-center'>
        <span className="loader"></span>
        </div>}
    </div>
  );
};

export default UserPage;
