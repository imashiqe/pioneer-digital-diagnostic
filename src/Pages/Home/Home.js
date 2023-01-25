import React from 'react';
import Banner from './Banner/Banner';
import Services from './Services/Services';

const Home = () => {
    return (
        <div className='py-12'>
         <Banner></Banner>
         <Services></Services>
        </div>
    );
};

export default Home;