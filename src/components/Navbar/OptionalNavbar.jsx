import React, { useState } from 'react';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import prime from '../../Assets/prime.jpg'
import './OptionalNavbar.css';

const OptionalNavbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDropdown = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className='optionalnavbarBanner' onClick={toggleDropdown} >
      <div className='alloptionnavbarBanner'>Prime</div>
      <ArrowDropDownOutlinedIcon
        // className={`optionalnavbarBannericon2 ${isExpanded ? 'rotate-180' : ''}`}
      />

      {isExpanded && (
        <div className="dropdownMenu">
        <a href="https://www.amazon.in/amazonprime?ref=in-pr-tryprime-unrec-multi-benefit">
            <img src={prime} alt="prime" className='image' />
        </a>
        </div>
      )}
    </div>
  );
};

export default OptionalNavbar;