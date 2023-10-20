import { Link, useLocation } from "react-router-dom"

const AccountNav = () => {

  const {pathname} = useLocation();
  let subpage = pathname.split('/')?.[2];
  if (subpage === undefined) {
    subpage === 'profile';
  };

  function linkClasses (type=null) {
    let classes = 'inline-flex gap-1 py-2 px-6  rounded-full ';
    if (type === subpage) {
      classes += 'bg-primary text-white'
    } else {
      classes += 'bg-gray-200'
    }
    return classes;
  }


  return (
    <nav className="w-full flex justify-center mt-8 gap-4 mb-8">
      <Link 
        className={linkClasses('profile')}
        to={'/account/profile'}
      >
      My profile
      </Link>
      <Link
        className={linkClasses('bookings')}
        to={'/account/bookings'}
      >
      Liked posts
      </Link>
      <Link 
        className={linkClasses('places')}
        to={'/account/places'}
      >My posts
      </Link>
    </nav>
  )
}

export default AccountNav