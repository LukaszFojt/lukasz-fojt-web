import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import {
  AccountNav,
  PlaceImg
} from '../components';
import axios from 'axios';

const PlacesPage = () => {

  const [places,setPlaces] = useState([]);

  useEffect(() => {
    axios.get('/user-places').then(({data}) => {
      setPlaces(data);
    })
  },[])

  return (
    <div>
      <AccountNav />
      <div  
        className='text-center'>
        <Link 
          className='bg-blue-100 gap-1 inline-flex bg-primary text-blue-700 py-2 px-6 rounded-full'
          to={'/account/places/new'}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
            </svg>
            Add new place
        </Link>
      </div>
      <div className='mt-4'>
        {places.length > 0 && places.map(place => (
          <Link
            key={place._id}
            to={'/account/places/' +place._id}
            className='text-blue-700 bg-blue-100 p-4 rounded-2xl flex gap-4 cursor-pointer'>
            <div className='w-32 h-32 flex grow shrink-0'>
              <PlaceImg place={place} />
            </div>
            <div>
              <h2 className='text-xl'>{place.title}</h2>
              <p>{place.content}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default PlacesPage