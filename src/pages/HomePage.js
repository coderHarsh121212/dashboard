import React from "react";
import UserList from "../components/UserList";
import useResponse from "../useAxios/useResponse";
import UserPage from "./UserPage";

const HomePage = () => {
  const { response } = useResponse("/users");
  return (
    <>
      {!response.length == 0 ? (
        <div className=" w-full md:h-[100vh] h-fit">
          <div className="main-container">
            <div className="right-side">
              <h1 className="headtext">All Users</h1>
              <div className="upper-box">
                {response &&
                  response
                    .slice(9)
                    .map((e) => <UserList key={e.profile.email} data={e} />)}
              </div>
            </div>
            <div className="md:w-1/2  w-full md:h-screen">
              <UserPage />
            </div>
          </div>
        </div>
      ) : (
        <div className="loader-container">
          <span className="loader"></span>
        </div>
      )}
    </>
  );
};

export default HomePage;
