"use client";


import axios from "axios";
import React, {useEffect, useState } from "react";
import {useSearchParams,useRouter} from 'next/navigation'
const Card = () => {
 const serach = useSearchParams();
 const id = serach.get('id');
 const router = useRouter();
 console.log(id);
  const [data, setdata] = useState([]);
  const [Condition, setCondition] = useState([]);
  const [temp, setTemp] = useState([]);

  

  const formattedDateDisplay = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    return new Date(date).toLocaleDateString("en-US", options);
  };

  const fetchData = async () => {
    const res = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=ff9b41622f994b1287a73535210809&q=${id}&days=2`);
    setdata(res.data.location);
    setCondition(res.data.current.condition);
    setTemp(res.data.current);

  }
 
  useEffect(() => {
    fetchData();
   
  });

  return (
    <>

      <div className="min-h flex items-center justify-center ">
        <div className="flex flex-col bg-white rounded p-4 w-full max-w-xs box-content  border">
          {/* {data.map((data,key)=>{
            const{} = data;
          })} */}
          <div className="flex justify-start space-x-5">
            <div className="font-bold text-xl"> {data.name}</div>
            <div className="text-sml text-gray-500">
              {data.region}{","}{data.country}
            </div>
          </div>
          <div className="text-sm text-gray-500">
            {formattedDateDisplay(data.localtime)}
          </div>
          <div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400  w-72">
            <img
              src={Condition.icon}
              className="w-24 h-24"
              alt="weather"
            />
          </div>
          <div className="flex flex-row items-center justify-center mt-6">
            {/* <div className="font-medium text-6xl">{props.current.temp_c}°</div> */}
            <div className="flex flex-col items-center ml-6">
              <div>{Condition.text}</div>
              <div className="mt-1">
                <span className="text-sm">
                  <i className="far fa-long-arrow-up"></i>
                </span>
                <span className="text-sm font-light text-gray-500">{temp.feelslike_c}°C</span>
              </div>

            </div>
          </div>
          {/* <hr className="border"></hr> */}
          <div className="flex flex-row justify-between mt-6">
            <div className="flex flex-col items-center">
              <div className="font-medium text-sm">Wind</div>
              <div className="text-sm text-gray-500">{temp.wind_kph}k/h</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-medium text-sm">Humidity</div>
              <div className="text-sm text-gray-500">{temp.humidity}%</div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
