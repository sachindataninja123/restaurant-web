import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItem, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className="mt-25">
      <div className="">
        <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-500 text-[max(1vw,12px)]">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, idx) => {
          if (cartItem[item._id] > 0) {
            return (
              <div>
                <div
                  key={idx}
                  className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center  text-[max(1vw,12px)] text-black my-2.5"
                >
                  <img className="w-12.5" src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItem[item._id]}</p>
                  <p>${item.price * cartItem[item._id]}</p>
                  <p
                    className="cursor-pointer"
                    onClick={() => removeFromCart(item._id)}
                  >
                    x
                  </p>
                </div>
                <hr className="border-none bg-[#e2e2e2] h-px" />
              </div>
            );
          }
        })}
      </div>
      <div className="mt-20 flex justify-between gap-[max(12vw,20px)]">
        <div className="flex-1 flex flex-col gap-5">
          <h2>Cart Totals</h2>
          <div>
            <div className="flex justify-between text-[#555]">
              <p>Subtotal</p>
              <p>Rs {getTotalCartAmount()}</p>
            </div>
            <hr className="text-[#eeecec]" />

            <div className="flex justify-between text-[#555]">
              <p>Delivery Fee</p>
              <p>Rs {getTotalCartAmount() === 0 ? 0 : 40}</p>
            </div>
            <hr className="text-[#eeecec]" />

            <div className="flex justify-between text-[#555]">
              <p>Total</p>
              <p>
                Rs {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 40}
              </p>
            </div>
            <hr className="text-[#eeecec]" />
          </div>
          <div>
            <button
              onClick={() => navigate("/order")}
              className="border-none text-[white] bg-[tomato] w-max(15vw,200px py-4 px-12 rounded-sm cursor-pointer active:scale-95"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>

        <div>
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="mt-2.5 flex justify-between items-center bg-[#eaeaea] rounded-sm">
              <input
                className="bg-transparent border-none outline-none pl-2.5"
                type="text"
                placeholder="Enter Promo code"
              />
              <button className="w-[max(6vw,120px)] py-3 px-1 bg-black border-none text-white rounded-sm">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
