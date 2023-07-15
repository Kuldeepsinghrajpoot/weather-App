"use client"

import React,{useState} from 'react';

const Search = () => {
    
  const [inputs, setInputs] = useState("");
  return (
    <div>
      <div id="root">
        <form >
          <div className=" flex justify-center my-10">
            <div>
              <img
                src="https://waveciou.github.io/weather-app/img/apple-icon-57x57.png"
                alt=""
              />
            </div>
            <h1 className=" text-4xl font-bold my-3">Weather APP</h1>
          </div>
          <div className="flex justify-center space-x-5">
            <input
              onChange={(e) => setInputs(e.target.value)}
              type="text"
              className="border  rounded w-68 py-2 px-3 text-gray-700 mb-3 leading-right focus:outline-none focus:shadow-outline"
              placeholder="Search City"
              value={inputs}
              name="location"
              fdprocessedid="7ye4xe"
            />
            <br />
            <button
              type="submit"
              className="bg-blue-900 space-x-6 hover:bg-blue-700 text-white  h-10  py-2 px-4 rounded"
              fdprocessedid="ifivth"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Search;
