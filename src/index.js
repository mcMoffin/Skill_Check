import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faYoutube,faLinkedin } from '@fortawesome/free-brands-svg-icons';

import './style.css';

import Button from './components/button/Button';
import SVGIcon from './components/SVGIcon/SVGIcon';
import Dropdown from './components/Dropdown/Dropdown';
import LiveSite from './components/Live_Site/Live_Site';
import Domain from './components/Domain/Domain';

library.add(faTwitter, faYoutube, faLinkedin);
const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('live');
  const dropdownOptions = {
      default_option:{
        value: 'default',
        text: 'Tiiny Plan',
        className: 'tp',
        href: '/',
        img: {
          src: `${process.env.PUBLIC_URL}/assets/logos/bnb_logo.png`,
          alt: 'BNB Logo'
        }
      },
      option_list: [
      {
        value: 'Account',
        text: 'My Account',
        className: 'user',
        href: '/',
        img: {
          src: `${process.env.PUBLIC_URL}/assets/icons/user-circle.svg`,
          alt: 'user'
        }
      },
        {
        value: 'Upgrade',
        text: 'Upgrade Subscription',
        className: 'upgrade',
        href: '/',
        img: {
          src: `${process.env.PUBLIC_URL}/assets/icons/rocket.svg`,
          alt: 'Rocket Icon'
        }
      },
      {
        value: 'My Team',
        text: 'My Team',
        className: 'team',
        href: '/',
        img: {
          src: `${process.env.PUBLIC_URL}/assets/icons/user-group.svg`,
          alt: 'Group Icon'
        }
      },
      {
        value: 'Settings',
        text: 'Settings',
        className: 'settings',
        href: '/',
        img: {
          src: `${process.env.PUBLIC_URL}/assets/icons/cog-8-teeth.svg`,
          alt: 'Cog Icon'
        }
      },
      {
        value: 'Sign Out',
        text: 'Sign Out',
        className: 'sign-out',
        href: '/',
        img: {
          src: `${process.env.PUBLIC_URL}/assets/icons/arrow-right-end-on-rectangle.svg`,
          alt: 'Sign Out Icon'
        }
      }
    ]
  };

  const live_items = [
    {
      Status: 'Active',
      Domain: 'loremipsumdolorsitamet.tiiny.site',
      Modified: '2024-02-14 12:00:00'      
    },
    {
      Status: 'Private',
      Domain: 'loremipsumdolorsitamet.co.international',
      Modified: '2024-02-14 12:00:00'      
    },
    {
      Status: 'Private',
      Domain: 'loremipsumdolorsitamet.ca.landlord',
      Modified: '2024-02-14 12:00:00'      
    },
    {
      Status: 'Private',
      Domain: 'loremipsumdolorsitamet.in.site',
      Modified: '2024-02-14 12:00:00'      
    },
    {
      Status: 'Active',
      Domain: 'loremipsumdolorsitamet.org.gov',
      Modified: '2024-02-14 12:00:00'      
    },
    {
      Status: 'Private',
      Domain: 'loremipsum.tiiny.site',
      Modified: '2024-02-14 12:00:00'      
    },
    {
      Status: 'Active',
      Domain: 'loremipsumdolorsitamet.tiiny.site',
      Modified: '2024-02-14 12:00:00'      
    },
    {
      Status: 'Private',
      Domain: 'loremipsumdolorsitamet.tiiny.site',
      Modified: '2024-02-14 12:00:00'      
    },
    {
      Status: 'Active',
      Domain: 'loremipsumdolorsitamet.tiiny.site',
      Modified: '2024-02-14 12:00:00'      
    }
  ]

  const domains_items = [
    {
      Status: 'Active',
      Domain: 'Ipsumdolorsitamelorem.tiiny.site',
      Modified: '2024-02-14 12:00:00',
      Actions: {},
    },
    {
      Status: 'Disabled',
      Domain: 'Ipsumdolorsitamelorem.tiiny.site',
      Modified: '2024-02-14 12:00:00',
      Actions: {},
    },
  ]

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <React.StrictMode>
      <header className="App-header">
        <div className="header_left">
          <img src="../assets/logo.png" className="logo" alt="logo" />
        
          <nav className={isNavOpen ? 'open' : ''}>
            <ul>
              <li>
                <a href="/">
                  <img src="/assets/icons/chat-bubble-left.svg" width={15} height={15} alt="Support icon" />
                  <span>Support</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <img src="/assets/icons/open-book.svg" width={15} height={15} alt="Help Guide icon" />
                  <span>Help Guide</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <img src="/assets/icons/bolt.svg" width={15} height={15} alt="Integrations icon" />
                  <span>Integrations</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="header_right">
          <Dropdown className={"user_settings"} defaultOption={dropdownOptions.default_option} options={dropdownOptions.option_list} onSelect={()=>{console.log('clicked')}}/>
          <Button className="hidden gradient-button">
            <span>Upgrade</span>
            <SVGIcon
              id="arrow"
              className='icon gradient-icon'
              svg_url={`${process.env.PUBLIC_URL}/assets/icons/right_arrow.svg`}
            />
          </Button>
        </div>
        <Button className="hamburger" onClick={toggleNav}>☰</Button>
      </header>

      <section className="main_content_wrapper">
        <div className="main_content_header">
          <h1>My Account</h1>

          <div className="tab_menue">
            <button className={`tab ${activeTab === 'live' ? 'active' : ''}`} onClick={()=>setActiveTab('live')}><span>Live Site</span></button>
            <button className={`tab ${activeTab === 'archive' ? 'active' : ''}`} onClick={()=>setActiveTab('archive')}><span>Site Archive</span></button>
          </div>
        </div>

        <LiveSite items={live_items}/>
        <Domain items={domains_items}/>
      </section>

      <footer>
        <section className="main_footer">
          <div className='main_footer_wrapper'>
            <div className="footer_left">
              <div className="container">
                <img className='tiiny_footer_logo' src={`${process.env.PUBLIC_URL}/assets/logo-white.png`} alt="Tiiny white Logo" />
                <p>Tiiny Labs Ltd. is a company registered in England and Wales with company number 12977077</p>
              </div>
              <div className="container">
                <p>Made with</p>
                <img className='aws_logo' src={`${process.env.PUBLIC_URL}/assets/img/AWS_Logo.png`} alt="AWS Logo" />
              </div>
              <div className="container social">
                <a href="/"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="/"><FontAwesomeIcon icon={faYoutube} /></a>
                <a href="/"><FontAwesomeIcon icon={faLinkedin} /></a>
              </div>
            </div>
            <div className="footer_right">
              <div className="footer_list">
                <h3>Products</h3>
                <ul>
                  <li><a href="/">File Hosting</a></li>
                  <li><a href="/">File Analytics</a></li>
                  <li><a href="/">Password Protect</a></li>
                  <li><a href="/">QR Codes</a></li>
                </ul>
              </div>
              <div className="footer_list">
                <h3>Use Cases</h3>
                <ul>
                  <li><a href="/">Sales & Marketing</a></li>
                  <li><a href="/">Designers & Artists</a></li>
                  <li><a href="/">Developers</a></li>
                  <li><a href="/">Real Estate</a></li>
                  <li><a href="/">Recruitment</a></li>
                  <li><a href="/">Hospitality</a></li>
                  <li><a href="/">E-Learning & Publishing</a></li>
                  <li><a href="/">Crypto</a></li>
                  <li><a href="/">Students</a></li>
                </ul>
              </div>
              <div className="footer_list">
                <h3>Resources</h3>
                <ul>
                  <li><a href="/">Sales & Marketing</a></li>
                  <li><a href="/">Blog</a></li>
                  <li><a href="/">FAQs</a></li>
                  <li><a href="/">Support</a></li>
                  <li><a href="/">Report abuse</a></li>
                  <li><a href="/">Affiliate program</a></li>
                </ul>
              </div>
              <div className="footer_list">
                <h3>Useful links</h3>
                <ul>
                  <li><a href="/">Pricing</a></li>
                  <li><a href="/">Contact</a></li>
                  <li><a href="/">Log in / Sign up</a></li>
                  <li><a href="/">Download MacOS app</a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="copyright_container">
          <div className="copyright">
            <span><a href="/">© Tiiny Host 2023</a></span>
            <span><a href="/">Website by B&B</a></span>
          </div>
          <div className="copyright">
            <span><a href="/">Terms & Conditions</a></span>
            <span><a href="/">Privacy Policy</a></span>
          </div>
        </section>
      </footer>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
reportWebVitals();
