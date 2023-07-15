"use client";

import React, { useState } from "react";

const Card = (props) => {
  const formattedDateDisplay = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    return new Date(date).toLocaleDateString("en-US", options);
  };
 

  return (
    <>
   
      <div className="min-h flex items-center justify-center ">
        <div className="flex flex-col bg-white rounded p-4 w-full max-w-xs box-content  border">
          <div className="flex justify-start space-x-5">
            <div className="font-bold text-xl">{props.location.name} </div>
            <div className="text-sml text-gray-500">
              {props.location.region}
            </div>
          </div>
          <div className="text-sm text-gray-500">
            {formattedDateDisplay(props.location.localtime)}
          </div>
          <div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400  w-72">
            <img
              src={props.current.condition.icon}
              className="w-24 h-24"
              alt="hello"
            />
          </div>
          <div className="flex flex-row items-center justify-center mt-6">
            <div className="font-medium text-6xl">{props.current.temp_c}°</div>
            <div className="flex flex-col items-center ml-6">
              <div>Cloudy</div>
              <div className="mt-1">
                <span className="text-sm">
                  <i className="far fa-long-arrow-up"></i>
                </span>
                <span className="text-sm font-light text-gray-500">28°C</span>
              </div>
              <div>
                <span className="text-sm">
                  <i className="far fa-long-arrow-down"></i>
                </span>
                <span className="text-sm font-light text-gray-500">20°C</span>
              </div>
            </div>
          </div>
          {/* <hr className="border"></hr> */}
          <div className="flex flex-row justify-between mt-6">
            <div className="flex flex-col items-center">
              <div className="font-medium text-sm">Wind</div>
              <div className="text-sm text-gray-500">9k/h</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-medium text-sm">Humidity</div>
              <div className="text-sm text-gray-500">68%</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-medium text-sm">Visibility</div>
              <div className="text-sm text-gray-500">10km</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
