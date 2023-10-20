import { useContext,useState } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../UserContext"
import { motion } from 'framer-motion';
import { SectionWrapper } from './ho_components';
import { logoReaper, menu, close } from '../assets'
import { navLinks } from '../constants';

const Navbar = () => {

  const [active, setActive] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [toggleAnim, setToggleAnim] = useState(false);
  const [toggleTheme, setToggleTheme] = useState(false);
  const {user} = useContext(UserContext);
  
  const Logo = () => {
    return (
      <motion.img
        animate={{
          rotate: [0, 360, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: 'loop'
        }}
        src={logoReaper}
        className="w-8 h-8 md:w-14 md:h-14 ml-2"
        onClick={() => {
          setActive("");
          window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
          })
        }}
      />
    ) 
  }

  const MobileNavbar = () => {
    return (
      <div className='flex justify-center items-center lg:hidden p-5'>
        <img 
          src={toggle ? close : menu}
          alt ="menu"
          className='w-7 md:w-10 h-7 md:h-10 cursor-pointer hover:scale-110'
          onClick={() => {
          setToggle(!toggle)
          setToggleAnim(!toggleAnim)
          }}
        />
        <motion.div
          animate={{
            y: toggleAnim ? [-100, 50] : [0, 0]
          }}
          transition={{
            duration: 0.5,
          }}          
          className={`${!toggle ? 'hidden' : 'flex' } ${!toggleAnim ? 'top-10' : '' } absolute right-14`}>
            <ul 
              className='flex-col flex justify-center bg-orange-300 bg-opacity-10'
            >
            {user && (
              <div>
                <Link 
                  to="/account/profile">
                  {!!user && (
                  <div>
                    {user.name}
                  </div>
                  )}
                </Link>
              </div>
            )}

            {!user && (
              <div>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </div>
            )}
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-light" : "text-secondary" } 
                      text-[18px] font-light hover:scale-105`}
                >
                  <Link
                    to={`${link.link}`}
                    className="hover:text-white cursor-pointer"
                    onClick={() => {
                      setActive(link.title)
                        setToggle(!toggle)
                        setToggleAnim(!toggleAnim)
                        window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: 'smooth',
                      })
                    }}   
                  >
                    {link.title}
                  </Link>
                  <hr className={`${
                    active === link.title ? "bg-white" : "" } 
                    relative h-[3px] border-0 rounded-sm`}
                  />
                </li>       
              ))}
            </ul>
          </motion.div>
        </div>
      )
    }

    const DesktopNavbar = () => {
      return (
        <div className='hidden lg:flex'>
          <ul className='flex justify-center bg-orange-300 bg-opacity-10 gap-5 p-5'>
          {user && (
              <li
                className='
                flex gap-5
                text-[18px] font-light opacity-100'
              >
                <Link 
                  to="/account/profile">
                  {!!user && (
                  <div>
                    {user.name}
                  </div>
                  )}
                </Link>
              </li>
            )}

            {!user && (
              <li
                className='
                flex gap-5
                text-[18px] font-light opacity-100'
              >
                <Link to="/login">LOGIN</Link>
                <Link to="/register">REGISTER</Link>
              </li>
            )}
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                active === link.title ? "text-light" : "text-secondary" } 
                text-[18px] font-light opacity-100 `}
              >
                <Link
                  to={`${link.link}`}
                  className="hover:text-white cursor-pointer"
                  onClick={() => setActive(link.title)}
                >
                  {link.title}
                </Link>
                <hr 
                  className={`${
                  active === link.title ? "bg-white" : "" } 
                  relative top-6 h-[3px] border-0 rounded-sm`}/>
              </li>       
            ))}
          </ul>
        </div>
      )
    }

  let toggleBtn = document.getElementById('toggle-btn')
  let body = document.body;
  
  const toggleThemeFunction = () => {
    if(!toggleTheme){
      toggleBtn.classList.replace('dark-icon', 'light-icon');
      body.classList.replace('dark-theme', 'light-theme');
    } else if(toggleTheme){
      toggleBtn.classList.replace('light-icon', 'dark-icon');
      body.classList.replace('light-theme', 'dark-theme');
    } else {
      console.log("Smth went wrong!")
    }
  }

  return (
    <nav className='w-full fixed z-50 flex justify-between items-center bg-slate-300 bg-opacity-10'>
      <div className='w-full flex justify-between'>
      <Link 
        to="/"
        className='flex items-center gap-2'
      >
        <Logo />
        <p className='text-xl md:text-2xl'>Title | app</p>
      </Link>

      <div className='flex items-center pr-28'>
        <button
          id="toggle-btn"
          className='w-6 h-6 dark-icon bg-cover rounded-full'
          onClick = {() => {
            setToggleTheme(!toggleTheme)
            toggleThemeFunction()
          }}
        ></button>
      </div>

      <MobileNavbar />
      <DesktopNavbar />

      </div>  
    </nav>
  )
}

export default SectionWrapper(Navbar, "")