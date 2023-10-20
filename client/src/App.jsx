import axios from 'axios';
import AnimatedRoutes from './AnimatedRoutes';
import { Footer, Navbar } from './components';
import { UserContextProvider } from './UserContext';

//default axios behaviour
axios.defaults.baseURL=import.meta.env.VITE_API_BASE_URL;
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <AnimatedRoutes />
    </UserContextProvider> 
  )
}

export default App
