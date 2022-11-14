import React from 'react';
import treatment from '../../../assets/images/treatment.png';
import PrimaryButton from '../../../components/PrimaryButton';

const OurTurms = () => {
    return (
        <div className="card card-side grid grid-cols-1 lg:grid-cols-2 my-10">
        <figure><img src={treatment} className="lg:w-3/4 my-10" alt="treatment"/></figure>
        <div className=" flex flex-col justify-center ">
          <h2 className="card-title">Exceptional Dental Care, on Your Terms</h2>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
          <div className=" flex">
          <PrimaryButton>Get Started</PrimaryButton>
          </div>
          
        </div>
      </div>
    );
};

export default OurTurms;