import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SiFoodpanda } from 'react-icons/si';

function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const openDropdown = () => {
    setDropdownOpen(true);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setDropdownOpen(false); // Close the dropdown after selecting a service
    if (service === 'web') {
      navigate('/web');
    }else if (service === 'Mobile') {
      navigate('/Mobile');
    }else if (service === 'Grapic') {
      navigate('/Grapic');
    }else if (service === 'Salesforce') {
      navigate('/Salesforce');
    }else if (service === 'Student') {
      navigate('/Student');
    }else if (service === 'Uiux') {
      navigate('/Uiux');
    }else if (service === 'Wordpress') {
      navigate('/Wordpress');
    }
  };

  return (
    <header id="site-header" className="fixed-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg stroke">
          <Link className="navbar-brand" to="/">
            <span>
              <SiFoodpanda />
            </span>{' '}
            Paddy Clutivaters<span>
            
            </span>
          </Link>

          <button
            className="navbar-toggler collapsed bg-gradient"
            type="button"
            onClick={toggleDropdown}
          >
            <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
            <span className="navbar-toggler-icon fa icon-close fa-times"></span>
          </button>

          <div className={`collapse navbar-collapse ${isDropdownOpen ? 'show' : ''}`}>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item @@about-active">
                <Link to="/about" className="nav-link">
                  Rice Blast
                </Link>
              </li>
              <li className="nav-item @@contact-active">
                <Link to="/contact" className="nav-link">
                  Blight leaf
                </Link>
              </li>
              <li className="nav-item @@contact-active">
                <Link to="/projects" className="nav-link">
                  Rice Gain 
                </Link>
              </li>
              
                <Link
                  className="nav-link dropdown-toggle"
                  to="/services"
                  role="button"
                >
                 Price Prediction
                </Link>


       
                 
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
