import React from 'react';
import Iframe from 'react-iframe';

const Tvprogram = () => {
    return (
        <div className='container mx-auto'>
            <h3 className='text-center text-4xl pt-5 pb-5'>TV Program</h3>

            <div className='grid grid-cols-1'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure>
    <Iframe
    url="https://www.youtube.com/embed/e6xTie2sL0Q"
    width="400"
    height="400px"
    >
         
    </Iframe>
  </figure>
  <div className="card-body">
    <h2 className="card-title text-green-500">জন সচেতনতা মূলক অনুষ্ঠান</h2>
    <p>চিকিৎসার চেয়ে রোগ প্রতিরোধ উত্তম এই স্লোগানে RTV এর কার্যালয়ে অনুষ্ঠিত হলো পাইওনিয়ার ডিজিটাল ডায়াগনষ্টিক এর  জন সচেনতা মূলক অনুষ্ঠান।</p>
   
  </div>
</div>
            </div>
        </div>
    );
};

export default Tvprogram;