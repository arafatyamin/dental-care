import React from 'react';
import appointment from '../../../assets/images/appointment.png'

const ContactForm = () => {
    return (
        <section className="lg:flex lg:flex-col justify-center items-center  py-10" style={{
            background: `url(${appointment})`
        }}>
            <div className="lg:w-1/3">
                <div className="py-10 text-center">
                    <h5 className="text-primary">Contact Us</h5>
                    <h2 className="text-2xl text-white md:text-5xl">Stay connected with us</h2>
                </div>
                <form className="flex flex-col justify-center mx-4">
                <input type="email" placeholder="Email Address" className="input input-bordered w-full my-2" />
                <input type="text" placeholder="Subject" className="input input-bordered w-full my-2" />
                <textarea className="textarea w-full my-2" placeholder="Your message"></textarea>
                <input type="submit" className="btn bg-secondary sm:w-1/3 text-white my-2" value="submit" />
                </form>
            </div>
        </section>
    );
};

export default ContactForm;