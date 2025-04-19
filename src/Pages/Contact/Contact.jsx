import React from 'react';
import PageCover from '../Home/Shared/PageCover/PageCover';
import { FaPhoneVolume } from "react-icons/fa6";
import { FaClock, FaLocationArrow,  } from 'react-icons/fa';
import SectionTitle from '../Home/Shared/SectionTitle';
import { useForm } from 'react-hook-form';


const Contact = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data =>  {
        console.log(data);
    }
    return (
        <div>
            <PageCover heading={'Contact Us'}></PageCover>

           <section className='max-w-screen-2xl mx-auto'>
           <div className='grid lg:grid-cols-3 p-16 gap-y-4 lg:gap-x-12'>
                <div className='border '>
                    <div className='bg-[#D1A054] py-3 text-centerte text-white text-2xl flex justify-center items-center'><FaPhoneVolume></FaPhoneVolume></div>
                    <div className='bg-gray-800/20 mx-4 mb-4 p-8 text-center'>
                        <h3 className='font-semibold text-3xl uppercase'>phone</h3>
                        <p>01700671150</p>
                    </div>
                </div>
                <div className='border '>
                    <div className='bg-[#D1A054] py-3 text-centerte text-white text-2xl flex justify-center items-center'><FaLocationArrow></FaLocationArrow></div>
                    <div className='bg-gray-800/20 mx-4 mb-4 p-8 text-center'>
                        <h3 className='font-semibold text-3xl uppercase'>Address</h3>
                        <p>51/kha Technology Angle, Reserved Complex</p>
                    </div>
                </div>
                <div className='border '>
                    <div className='bg-[#D1A054] py-3 text-centerte text-white text-2xl flex justify-center items-center'><FaClock></FaClock> </div>
                    <div className='bg-gray-800/20 mx-4 mb-4 p-8 text-center'>
                        <h3 className='font-semibold text-3xl uppercase'>Working Hour</h3>
                        <p>Mon - Fri: 08:00 - 22:00</p>
                        <p>Sat - Sun: 09:00 - 00:00</p>
                    </div>
                </div>
               
                
               

            </div>
           </section>

           <SectionTitle
           subheading={'---Send Us a Message---'}
           heading={'Contact Form'}
           ></SectionTitle>

           <div className='bg-gray-500/30 p-16 m-24 max-w-screen-2xl mx-auto'  >
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className='flex gap-x-8'>
                    <input {...register("name")}  placeholder='Name' className=' bg-white focus:outline-none focus:ring-1 focus:bg-amber-500 focus:text-white   w-full pl-4 py-4 rounded-xl' type="text" name="name"  />
                    <input {...register("email", {required: true})}  placeholder='Email' className=' bg-white focus:outline-none focus:ring-1 focus:bg-amber-500 focus:text-white   w-full pl-4 py-4 rounded-xl' type="email" name="email"  />
                    
                </div>
                <input className=' bg-white focus:outline-none focus:ring-1   focus:bg-amber-500  focus:text-white w-full pl-4 py-4 rounded-xl my-4' placeholder='Phone'  type="text" name="phone" id="" />
                {errors.phone && <span>This field is required</span>}
                <textarea
                {...register("message")}
                className=" bg-white focus:bg-amber-500 focus:text-white w-full rounded   px-3 py-2 leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                id="_message"
                placeholder="what's in your mind"
                name="message"
                rows="9"
                ></textarea>
                <input type="submit" className='btn bg-amber-400 outline-0 w-full my-8' value="SUBMIT" />
            </form>
           </div>
        </div>
    );
};

export default Contact;