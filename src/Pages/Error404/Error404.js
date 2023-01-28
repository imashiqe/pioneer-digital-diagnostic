import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../shared/Footer/Footer';
import error from '../../assets/image/error.png'

const Error404 = () => {
    return (
        <div >
          <Header></Header>
            <div className='grid grid-cols-1 container mx-auto top py-10'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src={error} alt="Album"/></figure>
  <div className="card-body top">
    <h2 className="card-title justify-center text-6xl text-green-400">Opps</h2>
    <h2 className="card-title justify-center text-6xl text-green-700">Error 404</h2>
   
    <div className="card-actions justify-end top">
      <button className="btn btn-primary"><Link to='/'>Return Back</Link></button>
    </div>
  </div>
</div>
            </div>
          <Footer></Footer>
        </div>
    );
};

export default Error404;