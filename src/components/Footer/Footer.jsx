import './Footer.css';
import Github from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';
import Linkedin from '../../assets/linkedin.png';
import Logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <section className='Footer-container'>
      <hr />
      <div className='footer'>
          <div className='social-links'>
              <img src={Github} alt="Github" />
              <img src={Instagram} alt="Instagram" />
              <img src={Linkedin} alt="Linkedin" />
          </div>

          <div className="logo-footer">
              <img src={Logo} alt="Logo" />
          </div>
      </div>

      <div className="blur footer-blur-1"></div>
      <div className="blur footer-blur-2"></div>
    </section>
  )
}

export default Footer