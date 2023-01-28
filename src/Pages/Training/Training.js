import React from 'react';
import training from '../../assets/image/training.jpeg'
const Training = () => {
    return (
        <div className='grid grid-cols-1 top container mx-auto py-10'>
            <div className="card  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={training} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title text-green-600">ফাস্ট এইড ট্রেনিং সেন্টার</h2>
    <p>সাধারন মানুষের জন্য এমন একটি প্রশিক্ষন যাতে তারা হঠাৎ অজ্ঞান , হার্ট এ্যাটাক, ফিট হওয়া , আগুনে পুড়ে যাওয়া , পানিতে ডুবে যাওয়া, সাপের কামড়, ইলেক্ট্রিক সকের মত দুর্ঘটনায় আহত বা অসুস্থতায় ডাক্তারের চিকিৎসা নেয়ার পূর্বে নিজেকে বা প্রিয়জনকে বাঁচানোর বা কষ্ট কমানোর কৌশল জানতে ও শিখতে পারে । সহজ ‍উপায়ে এবং স্বপ্ন মূল্য আমরা ফাস্ট এইড ট্রেনিং দিয়ে থাকি।</p>
  
  </div>
</div>
        </div>
    );
};

export default Training;