import React from 'react'
import "./Footer.css"
import amazonlogo from "../../Assets/amazonlogo.png"
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footercontent'>
        <div className='footercont1'>
            <div className='footertittle'>Get to Know Us</div>
            <div className='footersubtittle'>
                <a href="#">About Amazon</a>
                <a href="#">Careers</a>
                <a href="#">Press Releases</a>
                <a href="#">Amazon Science</a>
            </div>
        </div>
        <div className='footercont2'>
            <div className='footertittle'>Connect with Us</div>
            <div className='footersubtittle'>
                <a href="#">Facebook</a>
                <a href="#">Twitter</a>
                <a href="#">Instagram</a>
                
            </div>
        </div>
        <div className='footercont3'>
            <div className='footertittle'>Make Money with Us</div>
            <div className='footersubtittle'>
                <a href="#">Make Money with UsSell on Amazon</a>
                <a href="#">Sell under Amazon Accelerator</a>
                <a href="#">Protect and Build Your Brand</a>
                <a href="#">Amazon Global Selling</a>
                <a href="#">Supply to Amazon</a>
                <a href="#">Become an Affiliate</a>
                <a href="#">Fulfilment by Amazon</a>
                <a href="#">Advertise Your Products</a>
                <a href="#">Amazon Pay on Merchants
                </a>
            </div>
        </div>
        <div className='footercont4'>
            <div className='footertittle'> Let Us Help You</div>
            <div className='footersubtittle'>
                <a href="#">Your Account</a>
                <a href="#">Returns Centre</a>
                <a href="#">Recalls and Product Safety Alerts</a>
                <a href="#">100% Purchase Protection</a>
                <a href="#">Amazon App Download</a>
                <a href="#">Help</a>

            </div>
        </div>
      </div>
      <div className='amazonimg'>
        <a href="">
            <img  className="amazonfooterimg" src={amazonlogo} alt="" />
        </a>
      </div>
    </div>
  )
}

export default Footer
