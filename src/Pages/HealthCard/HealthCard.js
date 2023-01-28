import React from 'react';
import './HealthCard.css';
import card from "../../assets/image/card.jpg"

const HealthCard = () => {
    return (
        <div className='grid grid-cols-1 top py-10'>
            <div className="card   shadow-xl">
  <figure className=" pt-10">
    <img src={card} alt="Card" className="rounded-xl" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title text-green-500">বিশেষজ্ঞ চিকিৎসকগনের ফি থেকে ছাড় :</h2>
    <p>মহামান্য রাষ্ট্রপতির প্রাক্তন ব্যক্তিগত চিকিৎসক ব্রিঃ জেঃ (অবঃ) ডাঃ আনোয়ার হোসেন, ইঝগগট-এর প্রফেসর এ্যমিরেটাস ডাঃ মোঃ নূরুল ইসলাম, ইবনে সিনা মেডিকেল কলেজের অধ্যক্ষ বিঃ জেঃ (অবঃ) প্রফেসর মোহাম্মদ নূরুজ্জামানসহ আমাদের তালিকাভুক্ত জাতীয় ও আর্ন্তজাতীয় পর্যায়ে পুরস্কারপ্রাপ্ত-খ্যাতিমান বহু সংখ্যক বিশেষজ্ঞ চিকিৎসকগনের ফী থেকে ২০%-৫০% পর্যন্ত ছাড়।</p>
  
  </div>
  <div className="card-body ">
    <h2 className="card-title text-green-500">হাসপাতালের সেবামূল্য থেকে ছাড় :</h2>
    <p>সেন্ট্রাল হসপিটাল লিমিটেড, আল-রাজী হাসপাতাল এবং ব্রাইটন হসপিটালসহ দেশব্যপী আমাদের তালিকাভুক্ত বহু সংখ্যক প্রসিদ্ধ হাসপাতাল/ক্লিনিক/ডায়গনস্টিক সেন্টারে রোগ নির্নয়, সিট/কেবিন ভাড়া, ফার্মেসী এবং অপারেশন এর সেবা মূল্য থেকে ৫%-৫০% পর্যন্ত ছাড়।</p>
  
  </div>
  <div className="card-body ">
    <h2 className="card-title text-green-500">অন্যান্য সেবা মূল্য থেকে ছাড় :
খাবারে :</h2>
    <p>আমাদের তালিকাভুক্ত বাংলা, থাই ও চাইনিজ রেস্টুরেন্ট চায়না কিচেন, পামপী রেস্টুরেন্ট, নিউ চিংড়ি, রেড চিলি, ইউ এফ সি, ভুতের আড্ডা, ফুড ভিলেজ ও মায়ামী ফুড সহ অন্যান্য রেষ্টুরেন্টে ৫%-২০% পর্যন্ত ছাড়।</p>
  
  </div>
  <div className="card-body ">
    <h2 className="card-title text-green-500">পোশাকে :
</h2>
    <p>ব্রান্ডেড শপ ফেইথ ১১ ও রিনা কালেকশন সহ বিভিন্ন ব্রান্ডেড পোষাকের দোকানে এ ৫%-১০% পর্যন্ত।</p>
  
  </div>
  <div className="card-body ">
    <h2 className="card-title text-green-500">জিমনেশিয়ামে :
</h2>
    <p>গোল্ডস জিম ও প্লাটিনাম জিম এ ২০%-৪০% পর্যন্ত ।
তাছাড়া বিউটি পার্লার, টেইলার্স, কম্পিউটার ট্রেনিং সেন্টার ও পরিবহন সেবাসহ বিভিন্ন প্রতিষ্ঠানের সেবা বা পন্যে বিশেষ ছাড়।</p>
  
  </div>
  <div className="card-body ">
    <h2 className="card-title text-green-500">স্বাস্থ্য তথ্য :
</h2>
    <p>২৪ ঘন্টার যে কোন সময় আমাদের ওয়েব www.pioneerhsbd.com এবং কল সেন্টারের মাধ্যমে স্বাস্থ্য তথ্য দিয়ে সেবা প্রদান।</p>
  
  </div>
  <div className="card-body ">
    <h2 className="card-title text-green-500">ব্লাড ডোনেশান :
</h2>
    <p>ডোনার কালেকশন করে দেয়া।</p>
  
  </div>
  <div className="card-body ">
    <h2 className="card-title text-green-500">নিজস্ব হেলথ সেন্টার থেকে সুবিধা :
</h2>
    <p>কমমূল্যে মানসম্মত সেবার অঙ্গীকারে প্রতিষ্ঠিত আমাদের নিজস্ব হেলথ সেন্টারের বিভাগ</p>
  
  </div>
  <div className="card-body ">
    <h2 className="card-title text-green-500">বিভাগ
সমূহ নিুরুপ :
</h2>
    <p>ডায়গনষ্টিক সেন্টার, কনসালটেশন সেন্টার, ফাষ্ট এইড ট্রেনিং সেন্টার ও ভ্যাকসিনেশান সেন্টার।</p>
  
  </div>
</div>
        </div>
    );
};

export default HealthCard;