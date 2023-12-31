import React, {useEffect, useState, useContext} from 'react'

import { useParams } from 'react-router-dom';
import DataContext from '../../context/DataContext';

import Button from '../components/Button'
import Footer from '../components/Footer'

import TopBanner from '../components/Header/TopBanner';
import LogoBanner from '../components/Header/LogoBanner';
import Navbar from '../components/Header/Navbar';
import SubBanner from '../components/Header/SubBanner';

const FlowerDetails = () => {
  const { identifier } = useParams();
  const [details, setDetails] = useState('');  

  const { addToCart } = useContext(DataContext)

  const fetchData = async () => {
    try {
      const res = await fetch(`/api/product/${identifier}`);
      if (res.ok) {
        const json = await res.json();
        setDetails(json);
      } else {
        console.log('Something went wrong');
      }
    } catch (error) {
        console.error(error);
      }
  }

  useEffect(() => {
    fetchData()
  }, [])

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
        title={details.title}
        page="product"
      />
      <div className="mx-40 py-10 flex flex-col justify-center gap-10">
          <div className="flex flex-row justify-center gap-10 w-auto">
            {details.image && (
              <img className='w-96 h-96 object-fill overflow-hidden' alt='flowers'
                src={details.image.url}
              />
            )}
            <div className="flex flex-col p-1 gap-3 w-2/3">
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                  <h1 className="text-4xl">{details.title}</h1>
                  <p className="text-md">₱ {details.price}</p>
                </div>
                <p className="text-lg">{details.description}</p>
              </div>
              <div className='flex justify-items-center gap-5'>
                <Button onClick={() => addToCart(details._id, details.title, details.flowerType, details.price, details.description, details.ocassion, details.category, details.image.url)} title='Add to Cart'/>
                <Button to='/my-cart' title='Checkout Now!'/>
              </div>
            </div>
          </div>
        <div className="flex flex-col justify-center gap-3">
          <h2 className="text-3xl">You may also like...</h2>
          <div className="flex flex-row justify-between items-center">
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default FlowerDetails
