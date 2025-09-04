import React from 'react'
import './NavbarBuilt.css';
import amazonlogo from '../../../Assets/amazonlogo.png'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import indiaflag from '../../../Assets/india flag.png'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
const NavbarBuilt = () => {
    const cartItems=useSelector((state)=>state.cart.items);
  return (
    <div className='navbarbilt'>
          <div className='leftnavbilt'>
                {/* log-section  */}
             <Link to={'/'} className='navbiltlogo'>
                <img  className='amazonlogonavbar' src={amazonlogo} alt="amazonlogo" />
                <span className='navbar-inlogo'>.in</span>      
             </Link>
             {/* location section */}
             <div className='navbarbiltlocation'>
                <div className='navbarbiltlocationimg'>
                         <LocationOnOutlinedIcon className='locationicon'/>
                </div>
                <div className='navbarbiltlocationplace'>
                    <div className='navbarbiltlocationtop'>
                        Delivering to Pune 412201
                    </div>
                    <div className='navbarbiltlocationbottom'>
                            update Location
                    </div>
                </div>
             </div>
          </div>
          <div className='navbiltsearchbox'>
             <div className='navbiltsearchdiv'>
                <div className='navbiltsearchboxall'>
                    <div className='navbiltsearchboxalltext'>
                        All
                    </div>
                    <ArrowDropDownOutlinedIcon className='navbiltsearchboxallicon'/>
                </div>
                <input type="text" className='navbiltinputsearchbox' placeholder='Search Amazon.in' />
                <div className='navbiltsearchicondiv'>
                    <SearchOutlinedIcon className='navbiltsearchicon'/>
                </div>
           </div>
          </div>
          <div className='rightsidenavbarbilt'>
              <div className='indiaflag'>
                 <img src={indiaflag} alt="indiaflag" className='flag' />
                 <div className='indiacodenavbarbilt'>EN <ArrowDropDownOutlinedIcon className='indiacodenavbarbiltdrop'/></div>
              </div>
              <div className='hellosiginnavbar'>
              <div className='hellotopnavbar'>Hello , User</div>
              <div className='indiacodenavbarbilt'>Accounts & Lists</div>
              </div>
              <div className='hellosiginnavbar'>
              <div className='hellotopnavbar'>Returns</div>
              <div className='indiacodenavbarbilt'> & Orders</div>
              </div>
              <Link to={'/cart'} className='hellosiginnavbar'>
              <span className='cartitemnumbernavbar'>{cartItems.length}</span>
              <div className='indiacodenavbarbilt'><ShoppingCartOutlinedIcon/><span className='carttittle'>Cart</span></div>
              </Link>
          </div>
    </div>
  )
}

export default NavbarBuilt
