import React from 'react';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import Tvprogram from './Tvprogram/Tvprogram';

const Home = () => {
    return (
        <div className='py-12'>
         <Banner></Banner>
         <Services></Services>
         <Tvprogram></Tvprogram>
        </div>
    );
};

export default Home;