import React from 'react'
import aboutus from '../assets/images/aboutus.png';

import TopBanner from '../components/Header/TopBanner';
import LogoBanner from '../components/Header/LogoBanner';
import Navbar from '../components/Header/Navbar';
import SubBanner from '../components/Header/SubBanner';
import Footer from '../components/Footer';


const AboutUs = () => {

  return (
    <div>
      <div className='sticky top-0 w-full'>
        <TopBanner
          leftContent="+63 123 123 1234"
          centerContent="Open at 7 am to 10 pm"
          rightContent="example@gmail.com"
        />
      </div>  
      <LogoBanner />
      <div className='sticky top-8'>
        <Navbar />
      </div>
      <SubBanner 
        title="About Us"
        page="about-us"
      />
      <div className="mx-40 py-10 flex flex-col justify-center items-center gap-10">
        <h1 className="text-5xl">The Lovely & Manila</h1>
        <img src={aboutus} alt="" />
        <p className="text-lg">
          In 1981, Lovely&Manila Flower Shop started doing business, they
          started with just 2 employees, naming the founder Benjamin Arenas and
          his wife Virginia Arenas. The two started by having their shop on
          carts that would be pushed all around Marikina City, as time went on
          they were able to occupy a small space near Freedom Park in Marikina,
          until today where they are now located near Marikina City jail were
          their shop is now managed by their youngest daughter Lovely Arenas and
          has now 7 employees working for them. 
        </p>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default AboutUs
