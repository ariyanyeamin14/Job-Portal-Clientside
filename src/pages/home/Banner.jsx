import React from 'react';
import banner1 from '../../assets/banner/banner1.jpg'
import banner2 from '../../assets/banner/banner2.jpg'
import { motion } from "framer-motion";

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                <motion.img
                    animate={{ y: [50, 100, 50] }}
                    transition={{ duration: 10, repeat: Infinity}}
                    src={banner1}
                    className="max-w-sm rounded-t-3xl rounded-br-3xl border-l-[6px] border-b-[6px] shadow-2xl " />
                <motion.img
                    animate={{ x: [100, 50, 100] }}
                    transition={{ duration: 10, repeat: Infinity}}
                    src={banner2}
                    className="max-w-sm rounded-t-3xl rounded-br-3xl border-l-[6px] border-b-[6px] shadow-2xl " />
                </div>
                <div className='flex-1'>
                    <h1 className="text-5xl font-bold">Latest Jobs For You!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;