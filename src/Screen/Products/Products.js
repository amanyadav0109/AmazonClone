import React from "react";
import "./Products.css";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import productDetail from "./products.json";
import { useSelector,useDispatch } from "react-redux";
import { addToCart } from '../../redux/action/action';
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Products = () => {
  const dispatch=useDispatch();
  const cartItems=useSelector((state)=>state.cart.items);
  const handleAddToCart = (item) => {
    toast.success("SuccessFully Added in cart",{
      position: "bottom-right",
    });
    dispatch(addToCart(item));
  }
  return (
    <div className="productpage">
      <div className="productTopBanner">
        <div className="productTopBanneritem">Electronics</div>
        <div className="productTopBanneritemsubmenu">
          {" "}
          Mobile & Accessories{" "}
        </div>
        <div className="productTopBanneritemsubmenu">
          {" "}
          Laptops & Accessories{" "}
        </div>
        <div className="productTopBanneritemsubmenu">
          {" "}
          TV & Home Entertainment{" "}
        </div>
        <div className="productTopBanneritemsubmenu"> Audio </div>
        <div className="productTopBanneritemsubmenu"> Cameras </div>
        <div className="productTopBanneritemsubmenu">
          {" "}
          Computer Peripherals{" "}
        </div>
        <div className="productTopBanneritemsubmenu"> Smart Technology </div>
        <div className="productTopBanneritemsubmenu"> Musical Instruments </div>
        <div className="productTopBanneritemsubmenu"> Office & stationary </div>
      </div>

      <div className="productmainpage">
        <div className="productspagemainleftcategory">
          <div className="productspagemainleftcategoryTittle">Category</div>
          <div className="productspagemainleftcategorycontent">
            <div className="productspagemainleftcategoryTittlecontent">
              Computers & Accessories
            </div>
            <div className="productspagemainleftcategoryTittlecontentsub">
              Macbooks
            </div>
            <div className="productspagemainleftcategoryTittlecontentsub">
              Amazon Prime
            </div>
            <div className="productspagemainleftcategoryTittlecontentsub">
              Average Customer Review
            </div>

            <div className="ratingLeftBox">
              <StarOutlinedIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlinedIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlinedIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlinedIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineOutlinedIcon
                sx={{ fontSize: "20px", color: "#febd69" }}
              />
              <div className="andup">& Up</div>
            </div>
            <div className="ratingLeftBox">
              <StarOutlinedIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlinedIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlinedIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineOutlinedIcon
                sx={{ fontSize: "20px", color: "#febd69" }}
              />
              <StarOutlineOutlinedIcon
                sx={{ fontSize: "20px", color: "#febd69" }}
              />
              <div className="andup">& Up</div>
            </div>
            <div className="ratingLeftBox">
              <StarOutlinedIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlinedIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineOutlinedIcon
                sx={{ fontSize: "20px", color: "#febd69" }}
              />
              <StarOutlineOutlinedIcon
                sx={{ fontSize: "20px", color: "#febd69" }}
              />
              <StarOutlineOutlinedIcon
                sx={{ fontSize: "20px", color: "#febd69" }}
              />
              <div className="andup">& Up</div>
            </div>
            <div className="ratingLeftBox">
              <StarOutlinedIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineOutlinedIcon
                sx={{ fontSize: "20px", color: "#febd69" }}
              />
              <StarOutlineOutlinedIcon
                sx={{ fontSize: "20px", color: "#febd69" }}
              />
              <StarOutlineOutlinedIcon
                sx={{ fontSize: "20px", color: "#febd69" }}
              />
              <StarOutlineOutlinedIcon
                sx={{ fontSize: "20px", color: "#febd69" }}
              />
              <div className="andup">& Up</div>
            </div>
            <div className="productspagemainleftcategoryTittlecontentsub">
              Amazon Prime
            </div>
            <div className="productspagemainleftcategoryTittlecontentsub">
              Power Accessories
            </div>
            <div className="productspagemainleftcategoryTittlecontentsub">
              Wearable Technology
            </div>
            <div className="productspagemainleftcategoryTittlecontentsub">
              Home Audio
            </div>
            <div className="productspagemainleftcategoryTittlecontentsub">
              GPS & Accessories
            </div>
            <div className="productspagemainleftcategoryTittlecontentsub">
              Telephone & Accessories
            </div>
            <div className="productspagemainleftcategoryTittlecontentsub">
              Portable Media Players
            </div>
            <div className="productspagemainleftcategoryTittlecontentsub">
              Warranties
            </div>
            <div className="productspagemainleftcategoryTittlecontentsub">
              Batteries & Battery Charger
            </div>
            <div className="productspagemainleftcategoryTittlecontentsub">
              Home Audio
            </div>
            <div className="productspagemainleftcategoryTittlecontentsub">
              Amazon Prime
            </div>
            <div className="productspagemainleftcategoryTittlecontentsub">
              Home Audio
            </div>
            <div className="productspagemainleftcategoryTittlecontentsub">
              Amazon Prime
            </div>
          </div>
        </div>
        <div className="productmainpageright">
          <div className="productmainpagerightTopBanner">
            1-5 of 5 results for{" "}
            <span className="productmainpagerightTopBannerspan">Macbooks</span>
          </div>
          <div className="itemimageproductpage">
            
              {
              productDetail.product.map((item, index) => (
             <div className="itemimageproductpageOne" key={'item.id'}>
            <div className="imgblockitemimageproductpageOne">
         <img
        className="productimgproduct"
        src={item.imageUrl}
        alt="victus"
      />
    </div>
    <div className="productNameproduct">
      <div>{item.name}</div>

      <div className="productrating">
        <StarOutlinedIcon sx={{ fontSize: "20px", color: "#febd69" }} />
        <StarOutlinedIcon sx={{ fontSize: "20px", color: "#febd69" }} />
        <StarOutlinedIcon sx={{ fontSize: "20px", color: "#febd69" }} />
        <StarOutlinedIcon sx={{ fontSize: "20px", color: "#febd69" }} />
        <StarOutlineOutlinedIcon sx={{ fontSize: "20px", color: "#febd69" }} />
      </div>

      <div className="priceproductdetailpage">
        <div className="currencytext">₹</div>
        <div className="rateHomedetails">
          <div className="pricedetails">{item.price}</div>
          <div className="addtocartbutton" onClick={()=>{handleAddToCart(item)}}>Add to Cart</div>
        </div>
      </div>

      <div className="offproductpage">Upto 10% off on select cards</div>
      <div className="freedeliverypage">Free Delivery by Amazon</div>
    </div>
  </div>
))}

              
            
          </div>
        </div>
      
      </div>
      <ToastContainer/>
    </div>
 

  );
};

export default Products;
