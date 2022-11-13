import React from 'react';

const ReviewTestimonial = ({rview}) => {
    const {location, review, img, name, } = rview;
    return (
        <section className="m-5 shadow-xl p-4">
            <div className="card">
            <div className="flex flex-col gap-6 text-center">
                <p>{review}</p>
                <div className="card-end flex">
                <div className="avatar">
                    <div className="w-16 rounded-full mr-6">
                        <img src={img} alt="" />
                    </div>
                </div>
                <div>
                <h2 className="card-title">{name}</h2>
                <h5>{location}</h5>
                </div>
                </div>
            </div>
            </div>
            </section>
    );
};

export default ReviewTestimonial;