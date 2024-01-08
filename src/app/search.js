"use client"

import React, { useState } from 'react';

import {useRouter} from 'next/navigation'
const Search = () => {
  const [input, setinput] = useState();
  const router = useRouter();
  const SubmitButton = (e) => {
    router.push(`?id=${input}`)
    e.preventDefault();

  }
  return (
    <div>
      <div id="root">
        <div>
          <div className=" flex justify-center my-10">
            <div>
              <img
                src="https://waveciou.github.io/weather-app/img/apple-icon-57x57.png"
                alt=""
              />
            </div>
            <h1 className=" text-4xl font-bold my-3">Weather APP </h1>
          </div>
          <div className="flex justify-center space-x-5">
            <input

              onChange={(e) => setinput(e.target.value)}
              type="text"
              className="border  rounded w-68 py-2 px-3 text-gray-700 mb-3 leading-right focus:outline-none focus:shadow-outline"
              placeholder="Search City"

              name="q"
              fdprocessedid="7ye4xe"
            />
            <br />
            <button onClick={SubmitButton}
              type="submit"
              className="bg-blue-900 space-x-6 hover:bg-blue-700 text-white  h-10  py-2 px-4 rounded"
              fdprocessedid="ifivth"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      {/* <Weather input={inputs}/> */}
    </div>
  );
}

export default Search;
