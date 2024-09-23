import NotfoundIcon1 from "@/components/icons/notfound/NotfoundIcon1";
import { Button } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const nav = useNavigate()
  const handleComeBack = () => {
    nav(-1);
  }
  return (
    <>
      <div className="container mt-4">
        <div className="bg-gray-100 justify-center">
          <center className="mx-8 m-auto">
            <NotfoundIcon1 />
            <div className="tracking-widest mt-4">
              <span className="text-gray-500 text-6xl block">
                <span>4 0 4</span>
              </span>
              <span className="text-gray-500 text-xl">
                Sorry, We couldn't find what you are looking for!
              </span>
            </div>
          </center>
          <center className="mt-6 pb-8">

            <Button
              className="text-gray-500 font-mono text-xl bg-gray-200 p-3 rounded-md hover:shadow-md"
              onClick={handleComeBack}
            >Go back</Button>

          </center>
        </div>
      </div>
    </>
  );
};

export default NotFound;
