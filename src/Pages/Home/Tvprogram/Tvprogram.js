import React from 'react';
import Iframe from 'react-iframe';
import { Link } from 'react-router-dom';

const Tvprogram = () => {
    return (
        <div className='container mx-auto'>
            <h3 className='text-center  pt-5 pb-5  font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-red-800 to-red-200'>TV Program</h3>

            <div className='grid grid-cols-1  lg:grid-cols-2 md:grid-cols-1'>
            <div className="card  bg-base-100 shadow-xl">
  <figure>
    <Iframe
    url="https://www.youtube.com/embed/e6xTie2sL0Q"
    width="800px"
    height="600px"
    >
         
    </Iframe>
  </figure>

</div>


            <div className="card  bg-base-100 shadow-xl mx-5 border-b-4 border-green-500">
 
  <div className="card-body">
    <h2 className="card-title text-green-500 text-3xl lg:text-4xl">জন সচেতনতা মূলক অনুষ্ঠান</h2>
    <p className='text-1xl lg:text-2xl py-5'>চিকিৎসার চেয়ে রোগ প্রতিরোধ উত্তম এই স্লোগানে RTV এর কার্যালয়ে অনুষ্ঠিত হলো পাইওনিয়ার ডিজিটাল ডায়াগনষ্টিক এর  জন সচেনতা মূলক অনুষ্ঠান।</p>
   

    <div className="card-actions justify-center">
    <button className="btn border-none bg-gradient-to-r from-green-800 to-green-400 shadow-xl text-white "> <a href='https://youtu.be/e6xTie2sL0Q'>Watch Video</a> </button>
    </div>
   
   
  </div>
</div>
            </div>
        </div>
    );
};

export default Tvprogram;