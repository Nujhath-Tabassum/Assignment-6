import React from 'react';
import Banner from '../components/homepage/banner';
import WorkoutLibrary from '../components/homepage/WorkoutLibrary';

const page = () => {
  return (
    <div>
     <Banner></Banner>
     <WorkoutLibrary></WorkoutLibrary>
    </div>
  );
};

export default page;