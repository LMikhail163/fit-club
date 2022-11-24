import './Header.css';
import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';
import { useState } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const mobile = window.innerWidth<=768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className='header'>
      <img src={Logo} alt="Logo" className='logo'/>

      {menuOpened === false && mobile === true ? (
        <div 
          style={{
            backgroundColor: 'var(--appColor)', 
            padding: '0.5rem', 
            borderRadius: '5px'}}
            onClick={() => setMenuOpened(true)}>
            <img src={Bars} 
                 alt="Bars" 
                 style={{width: '1.3rem', height: '1.1rem'}}/>
        </div>
      ) : (
        <ul className='header-menu'>
          <li>
            <Link onClick={() => setMenuOpened(false)}
                  activeClass='active'
                  to='home' 
                  smooth={true} 
                  spy={true}>Home</Link>
          </li>
          <li>
            <Link onClick={() => setMenuOpened(false)}
                  to='programs' 
                  smooth={true} 
                  spy={true}>Programs</Link>
          </li>
          <li>
            <Link onClick={() => setMenuOpened(false)}
                  to='reasons' 
                  smooth={true} 
                  spy={true}>Why us</Link>
          </li>
          <li>
            <Link onClick={() => setMenuOpened(false)}
                  to='plans' 
                  smooth={true} 
                  spy={true}
                  >Plans</Link>
          </li>
          <li>
            <Link onClick={() => setMenuOpened(false)}
                  to='testimonials' 
                  smooth={true} 
                  spy={true}
                  >Testimonials</Link>
          </li>
        </ul>
      )}      
    </div>
  )
}

export default Header