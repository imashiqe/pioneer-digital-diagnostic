import React from 'react';
import docimg from '../../../assets/image/our doctor.jpg'
import diagnostic from '../../../assets/image/history-of-ultrasound.jpg'
import healthcard from '../../../assets/image/card.jpg'
import Readmoreone from './Readmoreone';
import Readmoretwo from './Readmoretwo';



const Services = () => {
    return (
        <div className='container mx-auto'>
            <h3 className='text-center font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-red-800 to-red-200 py-10'>Our Service</h3>

            <div class="grid grid-cols-2  lg:grid-cols-3   lg:gap-4   gap-2">
           
            <div className="card lg:w-96 mx-2 w-48 bg-base-100 shadow-xl lg:mx-24 border-x-4 border-red-400   ">
            <figure><img src={docimg} alt="Shoes" /></figure>
     <div className="card-body">
    <h2 className="card-title text-green-500">বিশেষজ্ঞ ডাক্তার সেবা</h2>
      <Readmoretwo></Readmoretwo>
   
     </div>
   </div>
            <div className="card lg:w-96 w-48 bg-base-100  shadow-xl border-x-4 border-green-400 ">
            <figure><img src={diagnostic} alt="Shoes" /></figure>
     <div className="card-body">
    <h2 className="card-title text-green-500">ডায়াগনস্টিক সেবা</h2>
  

  <Readmoreone></Readmoreone>

   
     </div>
   </div>
            <div className="card w-96 mx-3 lg:mx-0 mt-5 lg:mt-0  bg-base-100 shadow-xl border-x-4 border-red-400 ">
            <figure><img src={healthcard} alt="Shoes" /></figure>
     <div className="card-body">
    <h2 className="card-title text-green-500">পাইওনিয়ার হেলথ কার্ড</h2>
    <p>যুক্তরাষ্ট্র, কানাডা ও অস্ট্রোলিয়ার মত ‍উন্নত রাষ্ট্রের ন্যায় পাইওনিয়ার হেলথ কার্ডের মাধ্যমে ৫-৫০% পর্যন্ত ডিসকাউন্ট সুবিধায় চিকিৎসা সেবা দেয়া হয়।
এছাড়া কলসেন্টার ও অনলাইনের মাধ্যমে স্বাস্থ্য তথ্য,ব্লাড ডোনেশনসহ সব সময় আমরা আপনার পাশে।</p>
   
     </div>
   </div>

          

           




           </div>

   <h3 className='pt-5 pb-5 text-center  font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-red-800 to-red-200'>Other Services</h3>
           {/* parth 2 */}

           <div className='grid grid-cols-1 lg:grid-cols-2  '>
              
           <div className="card w-50 lg:mb-0 mb-5  mx-5 bg-gradient-to-r from-green-400 to-green-800 text-primary-content lg:mx-2 shadow-xl ">
  <div className="card-body">
    <h2 className="card-title">হোম সার্ভিস চিকিৎসা</h2>
    <p>ব্যস্ত এই শহরের সম্মানিত রোগীগনের সময় ও জীবন বাঁচাতে আমরা ভ্যাকসিন , স্যালাইন ও ইনজেকশন পুশিং , ডায়াগনষ্টিক টেষ্টের জন্য রক্ত-মল – মূত্র সংগ্রহ, রিপোর্ট পৌঁছান, ক্যাথাটার লাগানো ও খোলা , অপারেশনের সেলাই কাটা, ক্ষত স্থান ড্রেসিং, নেভুলাইজার দেয়া , প্রেশার মাপা এবং ইসিজি করানোসহ সম্ভাব্য সেবা সংশ্লিষ্ট বিষয়ে দক্ষ মহিলা / পুরুষ স্টাপের মাধ্যমে সহজ শর্তে বাসায় গিয়ে আন্তরিকভাবে দিয়ে থাকি । বিশেষ প্রয়োজনে ডাক্তারের মাধ্যমে হোম সার্ভিস চিকিৎসা দেয়া হয়</p>
  
  </div>
</div>
           <div className="card w-50 lg:mx-0 mx-5  bg-gradient-to-r from-green-400 to-green-800 text-primary-content shadow-xl">
  <div className="card-body">
    <h2 className="card-title">ভ্যাকসিন ( টিকা ) সেন্টার</h2>
    <p>সিটি কর্পোরেশন ও দেশী-বিদেশী ভ্যাকসিন সরবরাহকারী প্রতিষ্ঠানের সহায়তায় টিটি,কুকুরে কামড়ে জলাতংক, হেপাটাইটিস এ ও বি , টাইফিয়েড , নিউমোনিয়া প্রতিরোধক সহ প্রয়োজনীয় সকল প্রকার টিকা দেয়ার ব্যবস্থা আছে। যা সুস্থ্য থাকতে সকলের দরকার । বিশেষ করে নবজাতাক শিশু, গর্ভবতী মা , কিশোরী, বিদেশগামী, পবিত্র হজ্জ বা ওমরাহ গমনেচ্ছুক গনের জন্য একান্ত প্রয়োজন।</p>
   
  </div>
</div>
           </div>


        </div>
    );
};

export default Services;