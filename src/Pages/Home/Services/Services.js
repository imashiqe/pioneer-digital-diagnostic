import React from 'react';
import docimg from '../../../assets/image/our doctor.jpg'
import diagnostic from '../../../assets/image/history-of-ultrasound.jpg'
import healthcard from '../../../assets/image/card.jpg'



const Services = () => {
    return (
        <div className='container mx-auto'>
            <h3 className='text-center font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-red-800 to-red-200 py-10'>Our Service</h3>

            <div class="grid grid-cols-1  lg:grid-cols-3      gap-4">
           
            <div className="card w-96 bg-base-100 shadow-xl border-x-4 border-green-400   ">
            <figure><img src={docimg} alt="Shoes" /></figure>
     <div className="card-body">
    <h2 className="card-title text-green-500">বিশেষজ্ঞ ডাক্তার সেবা</h2>
    <p>সকাল  ৮ টা থেকে রাতহ ৯টা পর্যন্ত শুক্রবার ও ছুটির দিনসহ প্রতিদিন বিশেষজ্ঞ  ডাক্তারের মাধ্যমে চিকিৎসা সেবা।
সকল চিকিৎসকই  MBBS পাশের পর সংশ্লিষ্ট বিষয়ে Diploma/FCPS/MS/MD ডিগ্রীর অধিকারী । অনেকেই জাতীয় বা আন্তর্জাতিক পুরষ্কার প্রাপ্ত চিকিৎসক।
তুলনামূলকভাবে কম চিকিৎসা ফি এর বিনিমিয়ে চিকিৎসা সেবা প্রদান।
বঙ্গবন্দু শেখ মুজিব মেডিকেল বিশ্ববিদ্যালয় ( পিজি হাসপাতাল), ঢাকা মেডিকেল কলেজ ও সলিমুল্লাহ মেডিকেল কলেজ হাসপাতাল, পঙ্গু হাসপাতাল, শিশু হাসপাতাল, মাতুয়াইল শিশু- মাতৃ স্বাস্থ্য ইনষ্টটিটিউট সহ খ্যাতনামা বিভিন্ন হাসপাতালের মেডিসিন, শিশু,গাইনী, লিভার, ডায়াবেটিস ও ই এনটিসহ প্রায় সকল বিভাগের বিশেষজ্ঞ  মহিলা ও পুরুষ চিকিৎসকগন আমাদের চেম্বারে রোগী দেখেন ।
ডাক্তারগনের সঠিকতা যাচাইয়ের জন্য ডাক্তার তালিকায় প্রত্যেকের নিবন্ধন নাম্বার দেয়া হয়েছে।</p>
   
     </div>
   </div>
            <div className="card w-96 bg-base-100 shadow-xl border-x-4 border-green-400 ">
            <figure><img src={diagnostic} alt="Shoes" /></figure>
     <div className="card-body">
    <h2 className="card-title text-green-500">ডায়াগনস্টিক সেবা</h2>
    <p>ইতালিসহ উন্নত বিশ্বের অত্যাধুনিক প্রযুক্তির যন্ত্রপতি ও রি এজেন্ট দ্বারা রক্ত,মল , মুত্র ও কফসহ মানব শরিরের বিভিন্ন উপাদান  পরীক্ষা করা হয়।
      প্রফেসর লেভেলের কনসালট্যান্ট প্যাথলজিষ্ট এর তত্তাবধানে ডিপ্লোমাধারী দক্ষ মেডিকেল টেকনোলজিষ্ট দ্বারা পরিচালিত ।
      অভিজ্ঞ মহিলা সনোলজিস্ট ও ‍উন্নত প্রযুক্তি ব্যাবহার করে অপেক্ষাকৃত কমমুল্যে মানসম্মত ও দ্রুত সেবা প্রদান।
      সর্বাধুনিক প্রযুক্তি ১২ চ্যানেল  মেশিনে ইসিজি করানো হয়।
      অত্যাধুনিক মেশিনে অভিজ্ঞ কনসালট্যান্ট রেডিওলজিস্ট এর তত্তাবধানে এক্স-রে করা হয়।</p>


   
     </div>
   </div>
            <div className="card w-96 bg-base-100 shadow-xl border-x-4 border-green-400 ">
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
              
           <div className="card w-50  bg-gradient-to-r from-green-400 to-green-800 text-primary-content lg:mx-2 shadow-xl ">
  <div className="card-body">
    <h2 className="card-title">হোম সার্ভিস চিকিৎসা</h2>
    <p>ব্যস্ত এই শহরের সম্মানিত রোগীগনের সময় ও জীবন বাঁচাতে আমরা ভ্যাকসিন , স্যালাইন ও ইনজেকশন পুশিং , ডায়াগনষ্টিক টেষ্টের জন্য রক্ত-মল – মূত্র সংগ্রহ, রিপোর্ট পৌঁছান, ক্যাথাটার লাগানো ও খোলা , অপারেশনের সেলাই কাটা, ক্ষত স্থান ড্রেসিং, নেভুলাইজার দেয়া , প্রেশার মাপা এবং ইসিজি করানোসহ সম্ভাব্য সেবা সংশ্লিষ্ট বিষয়ে দক্ষ মহিলা / পুরুষ স্টাপের মাধ্যমে সহজ শর্তে বাসায় গিয়ে আন্তরিকভাবে দিয়ে থাকি । বিশেষ প্রয়োজনে ডাক্তারের মাধ্যমে হোম সার্ভিস চিকিৎসা দেয়া হয়</p>
  
  </div>
</div>
           <div className="card w-50  bg-gradient-to-r from-green-400 to-green-800 text-primary-content shadow-xl">
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