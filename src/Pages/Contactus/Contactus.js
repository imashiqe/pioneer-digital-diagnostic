import React from 'react';
import Iframe from 'react-iframe';

const Contactus = () => {
    return (
        <div className='top grid  grid-cols-1 container mx-auto'>
            <div className="card    bg-base-100 shadow-xl">
  <div className="card-body items-center">
    <h2 className="card-title text-4xl  text-green-600">Pioneer Digital Diagnostic</h2>
    <p>হক প্লাজা, বাড়ি # বি ২৫৬, রোড # ৭, নিমাই কাশারী, সানারপাড়, সিদ্ধিরগঞ্জ, নারায়ণগঞ্জ</p>
    <h3 className="card-title ">Mobile: +88 01889991000, +88 01755501099</h3>
    <h3 className="card-title ">E-mail: info@pioneerhsbd.com.</h3>
    <h3 className="card-title ">Facebook: Pioneer Digital Diagnostic</h3>
    <h3 className="card-title ">Skype ID: pioneerhsbd
Web: www.pioneerhsbd.com</h3>
    
  </div>

   <div className='item-center'>
   <Iframe  url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3653.347038739112!2d90.493728!3d23.699298!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x45916f12456b5e51!2zUGlvbmVlciBkaWdpdGFsIGRpYWdub3N0aWMuKOCmquCmvuCmh-Cmk-CmqOCmv-Cmr-CmvOCmvuCmsCDgpqHgpr_gppzgpr_gpp_gpr7gprIg4Kah4Ka-4Kav4Ka84Ka-4KaX4Kao4Ka44KeN4Kaf4Ka_4KaVKQ!5e0!3m2!1sen!2sus!4v1674586775834!5m2!1sen!2sus"
        width="1280x"
        height="320px">
       
     </Iframe>
   </div>

     
</div>
        </div>
    );
};

export default Contactus;