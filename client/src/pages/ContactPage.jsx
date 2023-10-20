import { logoReaper } from "../assets"
import { footerLinks } from "../constants"
import { Link } from "react-router-dom"
const ContactPage = () => {
  return (
    <div className="w-full h-screen">
      <div className="flex flex-col items-center text-center">
      <Link to='/'>
        <img 
          src={logoReaper} 
          alt="logo" 
          className="w-48 h-48 hover:scale-105"
        />
      </Link>
        <h1 className="smallHeader">Living, learning & leveling up.</h1>
        <p className="smallParagraph py-5">You can contact me on Github, Linkedin, ArtStation or via Email.</p>
        <div className="flex flex-col gap-2">
          {footerLinks.map((link) => (
            <div 
              key={link.name}
              className='w-fit'>
              <a 
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className='hover:scale-105 flex items-center'
              >
                <img 
                  src={link.icon} alt="icon"
                  className='w-8 md:w-12 h-8 md:h-12 mr-2 md:mr-5' 
                />
                <p>{link.name}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ContactPage