import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import teeth from '../../../assets/images/whitening.png'

const Services = () => {
    return (
        <div className="grid grid-cols-3 gap-8 my-8">
  
            <div className="flex flex-col justify-center items-center py-5 px-5  hover:bg-neutral  hover:text-white
          shadow-xl ">
                <div className="py-6 mr-5 flex justify-center">
                <img src={fluoride} alt="" className="w-32" />
                </div>
                <div className="flex flex-col  items-center font-bold">
                <div className="">Opening Hours</div>
                <div className="">31K</div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center py-5 px-5  hover:bg-neutral  hover:text-white 
          shadow-xl ">
                <div className="py-6 mr-5 flex justify-center">
                <img src={cavity} alt="" className="w-32" />
                </div>
                <div className="flex flex-col  items-center font-bold">
                <div className="">Opening Hours</div>
                <div className="">31K</div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center py-5 px-5  hover:bg-neutral 
          shadow-xl hover:text-white">
                <div className="py-6 mr-5 flex justify-center">
                <img src={teeth} alt="" className="w-32" />
                </div>
                <div className="flex flex-col  items-center font-bold">
                <div className="">Opening Hours</div>
                <div className="">31K</div>
                </div>
            </div>

            </div>
    );
};

export default Services;