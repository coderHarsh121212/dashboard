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
          <div className="flex flex-col-reverse md:flex-row">
            <div className="md:w-1/2 backgr h-[100vh] pb-20 p-2 w-full text-white">
              <h1 className="text-3xl font-sans font-bold text-center py-4 textcolor">
                All Users
              </h1>
              <div className="w-full h-full overflow-scroll p-2 flex flex-col gap-2  bg-scroll shadow-2xl ">
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
        <div className=" w-full  h-screen flex justify-center items-center bg-gray-600  ">  
          <span className="loader"></span>
        </div>
      )}
      
    </>
  );
};

export default HomePage;
