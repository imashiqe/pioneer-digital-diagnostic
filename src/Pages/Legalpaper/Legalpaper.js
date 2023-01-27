import React from 'react';
import registation from  '../../assets/image/Registation_Paper.jpg'
import trade from  '../../assets/image/Trade_Licence.jpg'
const Legalpaper = () => {
    return (
        <div className='top grid  grid-cols-1 text-center container mx-auto'>
            <h3 className='pt-10 text-3xl text-green-600'>Legal Documents of the company are provided here Company Registration Paper</h3>

             <div className='grid lg:grid-cols-2 sm:grid-cols-1 pt-10'>
             <img src={registation} />
            <img src={trade} />

             </div>
           
        </div>
    );
};

export default Legalpaper;