import React, { useState, useEffect } from "react";
import "./cart.css";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/action/action";
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Cart = () => {
  const [cartItem, setCartItem] = useState([]);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  let a=0;
  let cost=cartItems.map((item)=>{return a=a+item.price});
  useEffect(() => {
    
    setCartItem(cartItems);
  }, [cartItems]);
  const handleRemoveFromCart = (id) => {
    toast.error(" Item Removed from cart",{
      position: "bottom-right",
    });
  dispatch(removeFromCart(id));
}
  return (
    <div className="cart">
      <div className="topleftcart">
        <div className="toptittlecart">Shopping cart</div>
        <div className="Deselectallcart">Deselect all item</div>
        <div className="priceallcart">Price</div>
        <div className="cartitemsdiv">
          {cartItem.map((item, ind) => {
            return (
              <div className="cartitemblock">
                <div className="cartitemleftblock">
                  <div className="cartitemleftblockimg">
                    <img
                      className="cartitemimg"
                      src={item.imageUrl}
                    />
                  </div>
                  <div className="cartitemleftblockdetails">
                    <div className="cartitemproductname">
                        {item.name}
                    </div>
                    <div className="instock">In Stock</div>
                    <div className="elgfreeshop">
                      Elligible for FREE Shipping
                    </div>
                    <div className="fullfilled">
                      <img
                        className="fullfillimg"
                        src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_"
                      />
                    </div>
                    <div className="removefrombsket" onClick={()=>{handleRemoveFromCart(item.id)}}>Remove From Basket</div>
                  </div>
                </div>
                <div className="cartitemrightblock">Rs {item.price}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="toprightcart">
        <div className="subtotaltittle">
          subtotal({cartItem.length} items) :
          <span className="subTotalTittkespan"> Rs {a}</span>
        </div>
        <div className="giftaddto">
          <input type="checkbox" className="giftcheckbox" />
          This order contains a gift
        </div>
        <div className="proceedtobuybtn">Proceed to Buy</div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Cart;
