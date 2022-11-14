import React from 'react';
import watch from '../../../assets/icons/clock.svg'
import phone from '../../../assets/icons/phone.svg'
import location from '../../../assets/icons/marker.svg'


const StateCard = () => {
    return (
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 justify-between
          ">
  
            <div className="flex flex-col lg:flex-row w-full align-center  px-5 bg-gradient-to-l from-primary to-secondary hover:from-neutral hover:to-neutral shadow-xl pb-6">
                <div className="flex py-6 justify-center lg:mr-5 ">
                <img src={watch} alt="" className="lg:w-full" />
                </div>
                <div className="flex flex-col justify-center align-start text-white">
                <h2 className="">Opening Hours</h2>
                <p className="">Lorem Ipsum is simply dummy text of the pri</p>
                </div>
                
            </div>
            <div className=" flex flex-col lg:flex-row w-full align-center  px-5 bg-gradient-to-l from-primary to-secondary hover:from-neutral hover:to-neutral shadow-xl pb-6">
                <div className="flex py-6 justify-center lg:mr-5 ">
                <img src={location} alt="" className="lg:w-full" />
                </div>
                <div className="flex flex-col justify-center align-start text-white">
                <h2 className="text-2xl">Visit our location</h2>
                <p className="">Brooklyn, NY 10036, United States</p>
                </div>
                
            </div>
            <div className=" flex flex-col lg:flex-row w-full align-center  px-5 bg-gradient-to-l from-primary to-secondary hover:from-neutral hover:to-neutral shadow-xl pb-6">
                <div className="flex py-6 justify-center lg:mr-5 ">
                <img src={phone} alt="" className="lg:w-full" />
                </div>
                <div className="flex flex-col justify-center align-start text-white ">
                <div className="">Contact us now</div>
                <div className="">+000 123 456789</div>
                </div>
            </div>
            </div>
    );
};

export default StateCard;