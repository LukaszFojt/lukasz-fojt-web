import { useEffect, useState } from "react";
import {
  Categories,
  PhotosUploader,
  AccountNav
} from '../components';
import axios from 'axios';
import { Navigate, useParams } from "react-router-dom";
import Editor from '../Editor';

const PlacesFormPage = () => {
  const {id} = useParams();

  const [title,setTitle] = useState('');
  const [summary,setSummary] = useState('');
  const [content,setContent] = useState('');
  const [categories,setCategories] = useState([]);
  const [tags,setTags] = useState('');
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [redirect,setRedirect] = useState(false);

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get('/places/'+id).then(response => {
      const {data} = response;
      setTitle(data.title);
      setSummary(data.summary);
      setAddedPhotos(data.photos);
      setContent(data.content);
      setCategories(data.categories);
      setTags(data.tags);
    });
  },[id]);

  function inputHeader(text) {
    return (
      <h2 className='text-2xl mt-4'>{text}</h2>
    )
  }

  function inputDescription(text) {
    return (
      <p className='text-gray-500 text-sm'>{text}</p>
    )
  }
  
  function preInput(header,content) {
    return (
      <>
        {inputHeader(header)}
        {inputDescription(content)}
      </>
    );
  }

  async function savePlace(ev) {
    ev.preventDefault();
    const placeData = {
      title, summary, addedPhotos, content, categories, tags
    };

    if (id) {
      //update
      await axios.put('/places', {
        id,
        ...placeData
      });
      setRedirect(true);
    } else {
      //new place
      await axios.post('/places', {
        ...placeData
      });
      setRedirect(true);
    }
  };

  if (redirect) {
    return <Navigate to={'/account/places'} />
  }

  return (
    <>
      <div>
        <AccountNav />
        <form onSubmit={savePlace}>
          {preInput('Title', 'title for your post')}
          <input 
            className="text-black"
            type='text'
            placeholder='for example: "Github repository creation"'
            value={title}
            onChange={ev => setTitle(ev.target.value)}
          />
          {preInput('Summary','Short summary of your post')}
          <input
            className="text-black" 
            type='text'
            placeholder='Write here a few lines of summary for your post'
            value={summary}
            onChange={ev => setSummary(ev.target.value)}
          />
          {preInput('Photos','Add photos using link or from your device')}
          <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />
          {preInput('Content','Main content of your post')}
          <textarea 
            className="text-black"
            value={content}
            onChange={ev => setContent(ev.target.value)}
          />
          {preInput('Category','Select categories of your post')}
          <Categories selected={categories} onChange={setCategories} />
          {preInput('Tags','Add some tags for better placement')}
            <textarea     
              className='text-black'
              value={tags}
              onChange={ev => setTags(ev.target.value)}
            />
          <button className='primary my-4'>Save</button>
        </form>
      </div>
    </>
  )
}

export default PlacesFormPage