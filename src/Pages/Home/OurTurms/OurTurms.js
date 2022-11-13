import React from 'react';
import treatment from '../../../assets/images/treatment.png';
import PrimaryButton from '../../../components/PrimaryButton';

const OurTurms = () => {
    return (
        <div className="card card-side grid grid-cols-2 my-10">
        <figure><img src={treatment} className="w-3/4 my-10" alt="treatment"/></figure>
        <div className=" flex flex-col justify-center ">
          <h2 className="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className=" flex">
          <PrimaryButton>Get Started</PrimaryButton>
          </div>
          
        </div>
      </div>
    );
};

export default OurTurms;