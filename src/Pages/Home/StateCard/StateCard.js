import React from 'react';
import watch from '../../../assets/icons/clock.svg'
import phone from '../../../assets/icons/phone.svg'
import location from '../../../assets/icons/marker.svg'


const StateCard = () => {
    return (
        <div className="grid grid-cols-3 gap-8 justify-between
          ">
  
            <div className="flex  align-center px-5 bg-gradient-to-l from-primary to-secondary hover:from-neutral hover:to-neutral shadow-xl">
                <div className="flex py-6 mr-5 ">
                <img src={watch} alt="" className="w-full" />
                </div>
                <div className="flex flex-col justify-center align-start text-white">
                <div className="">Opening Hours</div>
                <div className="">31K</div>
                </div>
                
            </div>
            <div className=" flex  align-center px-5 bg-gradient-to-l from-primary to-secondary hover:from-neutral hover:to-neutral shadow-xl">
                <div className="flex py-6 mr-5 ">
                <img src={location} alt="" className="w-full" />
                </div>
                <div className="flex flex-col justify-center align-start text-white">
                <div className="">Opening Hours</div>
                <div className="">31K</div>
                </div>
                
            </div>
            <div className=" flex   align-center px-5 bg-gradient-to-l from-primary to-secondary hover:from-neutral hover:to-neutral shadow-xl">
                <div className="flex py-6 mr-5 ">
                <img src={phone} alt="" className="w-full" />
                </div>
                <div className="flex flex-col justify-center align-start text-white ">
                <div className="">Opening Hours</div>
                <div className="">31K</div>
                </div>
            </div>
            </div>
    );
};

export default StateCard;