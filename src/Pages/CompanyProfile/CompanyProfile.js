import React from 'react';
import md from '../../assets/image/md_pic.jpg'
const CompanyProfile = () => {
    return (
        <div className='top grid  grid-cols-1 container mx-auto py-10'>
            <div className="card card-side bg-base-100 ">
  <figure><img className='pt-10' src={md} alt="Anwar Hossain (Faruq)"/></figure>
  <div className="card-body">
    <h2 className="card-title justify-center text-4xl">Managing Director</h2>
    <h2 className="card-title  text-2xl">Md. Anwar Hossain (Faruq)   </h2>
    <p>Was born in the famous Molla family of Tamta village of Ramganj municipality under Lakshmipur district in 9.</p>

    <p><span className='text-2xl'> Education : </span>He passed his MA in first class with BA Honors from Dhaka University. After that, he got his LLB degree from Private Madrasai Aliya, Kamil from Dhaka, and National University.</p>
    <p><span className='text-2xl'> Training: </span>First Aid Training from Bangladesh Red Crescent Society, Human Resource Management under the Ministry of Industries under the Government of the People’s Republic.</p>

    
  </div>

  
</div>



<div className="card  bg-base-100 shadow-xl">
  <div className="card-body">
  <p><span className='text-2xl'> Experience:  </span>He has long-standing business experience as Chairman of Message Holdings Ltd, Finance Director of Shazar Unilallaboratories Ltd., Director of Creative Ready Link and proprietor of Mobile Touch.

Social Contribution From social life to social life, the humanitarian has played a vital role in social service from affiliating with various social and voluntary organizations, some of which are founders:</p>

<p><span className='text-2xl'> Founders: </span>Molla Foundation, Ramganj Forum Dhaka, Fatehpur Madrasa X Student Forum, Bangladesh Mobile Phone Business Association.</p>
<p><span className='text-2xl'> EC Member: </span>Cotton Jame Mosque, Ramganj Charitable Society.</p>
<p><span className='text-2xl'> X Office Secretary: </span>Poet Jasim Uddin is the Debating Club, University of Dhaka. Lakshmipur Student Welfare Association.</p>
<p><span className='text-2xl'> X Member: BNC :</span>, Robber Scout, and Baron Dhaka University.</p>

<h3 className='text-4xl'>Director of Finance</h3>
<p><span className='text-2xl'> Moses: Parveen Sultana :</span>was born in the famous Howlader family in Lohaliya village of Babuganj police station under the Barisal district.</p>
<p><span className='text-2xl'> Education: </span>BA Honors in Bengali Literature from Chittagong Government Women College under National University and a BA degree from Chittagong Teachers Training College.</p>
<p><span className='text-2xl'> Experience : </span>Besides teaching in various schools and colleges, he gains much experience in business and social service.</p>
  
  </div>
</div>
        </div>
    );
};

export default CompanyProfile;