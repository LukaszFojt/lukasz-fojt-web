import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  BookingWidget, 
  PlaceLink,
  PlacesGallery
} from '../components';

const PlacePage = () => {
  const {id} = useParams();
  const [place,setPlace] = useState(null);
  const [showAllPhotos,setShowAllPhotos] = useState(false);

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/places/${id}`).then(response => {
      setPlace(response.data);
    });
  }, [id]);

  if (!place) {
    return '';
  }

  return (
    <div className='mt-8 bg-blue-100 -mx-8 px-8 text-blue-700'>
      <h1 className='text-2xl'>{place.title}</h1>
      <div>{place.summary}</div>
      <PlacesGallery place={place} />
      <p className='my-4 font-light'>{place.content}</p>
      <div>
        {place.categories}
      </div>
      <p className='my-4 font-light'>Tags: {place.tags}</p>
        <div className='grid grid-cols-2'>
      </div>
    </div>
  )
}

export default PlacePage