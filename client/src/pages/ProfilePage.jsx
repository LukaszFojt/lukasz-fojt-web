import axios from "axios";
import { useContext, useState } from "react"
import { Navigate, useParams } from "react-router-dom"
import {AccountNav} from "../components";
import { UserContext } from "../UserContext"
import {PlacesPage} from "../pages";
import { logoReaper } from "../assets";

const ProfilePage = () => {

  const [redirect, setRedirect] = useState(null);
  const {ready, user, setUser} = useContext(UserContext)
  let {subpage} = useParams();
  if (subpage === undefined) {
    subpage = 'profile';
  }

  async function logout() {
    await axios.post('/logout');
    setRedirect('/');
    setUser(null);
  }

  if (!ready) {
    return 'Loading...';
  }

  if (ready && !user && !redirect) {
    return <Navigate to={'/login'} />
  }

  if (redirect) {
    return <Navigate to={redirect} />
  }

  return (
    <div>
      <AccountNav />
      {subpage === 'profile' && (
        <div className="flex flex-col h-screen w-full">
          <div className="flex items-center">
            <img
              className="w-16 h-16" 
              src={logoReaper} 
              alt='logo' 
            />
             <h2  className="font-bold">{user.name}</h2>
          </div>
          <div className="py-5">
            <h1>Your account informations:</h1>
            <h2>Username: {user.name}</h2>
            <h2>Email: ({user.email})</h2>
          </div>
          <button 
            className="primary max-w-sm mt-2"
            onClick={logout}
          >Logout</button>
        </div>
      )}

      {subpage === 'places' && (
        <PlacesPage />
      )}
    </div>
  )
}

export default ProfilePage