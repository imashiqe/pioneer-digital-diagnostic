import React from 'react';
import  imgone from "../../../assets/image/Healing Words in Our Conversation.jpg"
import  imgtwo from "../../../assets/image/Right Body Language.jpg"
import  imgthree from "../../../assets/image/Use The Right Listening Skills.jpg"
import  imgfour from "../../../assets/image/Have The Right Jone.jpg"
import "./Banner.css";
const Banner = () => {
    return (
        <div className='pt-10'>
                        <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    <img src={imgone} className="w-full imgcustom" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src={imgtwo} className="w-full imgcustom" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src={imgthree} className="w-full imgcustom" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src={imgfour} className="w-full imgcustom" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
        </div>
    );
};

export default Banner;