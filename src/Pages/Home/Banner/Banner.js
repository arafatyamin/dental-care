import React from 'react';
import chair from '../../../assets/images/chair.png'
import PrimaryButton from '../../../components/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero w-full">
        <div className="hero-content flex-col lg:flex-row-reverse w-full">
            <img alt="" src={chair} className="mx-3 lg:my-24 lg:w-1/2  rounded-lg shadow-2xl" />
            <div className="lg:w-1/2 mx-4">
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </div>
        </div>
    );
};

export default Banner;