import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const Cart = () => {
  const { cartItem, food_list, removeFromCart } = useContext(StoreContext);

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
              <p>{0}</p>
            </div>
            <hr className="text-[#eeecec]" />

            <div className="flex justify-between text-[#555]">
              <p>Delivery Fee</p>
              <p>{3}</p>
            </div>
            <hr className="text-[#eeecec]" />

            <div className="flex justify-between text-[#555]">
              <p>Total</p>
              <p>{0}</p>
            </div>
            <hr className="text-[#eeecec]" />
          </div>
          <button className="border-none text-[white] bg-[tomato] w-max(15vw,200px py-4 rounded-sm cursor-pointer">
            PROCEED TO CHECKOUT
          </button>
        </div>

        <div>
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div>
              <input type="text" placeholder="Enter Promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
