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
          {preInput('Title', 'title')}
          <input 
            type='text'
            placeholder='title, for example: My lovely apartment.'
            value={title}
            onChange={ev => setTitle(ev.target.value)}
          />
          {preInput('Summary','summary')}
          <input 
            type='text'
            placeholder='summary'
            value={summary}
            onChange={ev => setSummary(ev.target.value)}
          />
          {preInput('Photos','photos')}
          <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />
          {preInput('Content','content')}
          <Editor 
            value={content}
            onChange={setContent} 
          />
          {preInput('Category','category')}
          <Categories selected={categories} onChange={setCategories} />
          {preInput('Tags','tags')}
            <textarea     
              className=''
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