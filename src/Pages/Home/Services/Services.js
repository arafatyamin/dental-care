import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import teeth from '../../../assets/images/whitening.png'

const Services = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2
         lg:grid-cols-3  gap-8 my-8">
  
            <div className="flex flex-col justify-center items-center py-5 px-5  hover:bg-neutral  hover:text-white
          shadow-xl ">
                <div className="py-6 mr-5 flex justify-center">
                <img src={fluoride} alt="" className="md:w-32" />
                </div>
                <div className="flex flex-col  items-center text-center">
                <h2 className="text-2xl font-bold">Fluoride Treatment</h2>
                <p className="">Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center py-5 px-5  hover:bg-neutral  hover:text-white 
          shadow-xl ">
                <div className="py-6 mr-5 flex justify-center">
                <img src={cavity} alt="" className="md:w-32" />
                </div>
                <div className="flex flex-col  items-center text-center">
                <div className="text-2xl font-bold">Cavity Filling</div>
                <div className="">Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center py-5 px-5  hover:bg-neutral 
          shadow-xl hover:text-white">
                <div className="py-6 mr-5 flex justify-center">
                <img src={teeth} alt="" className="md:w-32" />
                </div>
                <div className="flex flex-col  items-center text-center">
                <div className="text-2xl font-bold">Teeth Whitening</div>
                <div className="">Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</div>
                </div>
            </div>

            </div>
    );
};

export default Services;