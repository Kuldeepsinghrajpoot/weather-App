import React from 'react';
import Weather from "./weathercard/page";
import Search from './serach'
const page = () => {
  return (
    <div>
      <Search/>
      <Weather/>
    </div>
  );
}

export default page;
