import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="flex items-start justify-between gap-12.5 mt-25">
      <div className="w-full max-w-[max(30%,500px)]  ">
        <p className="font-semibold text-3xl mb-12.5">Delivery Information</p>
        <div className="flex gap-2.5">
          <input
            className="mb-4 w-full p-2.5 border-[#c5c5c5] rounded-sm outline-[tomato] border-2"
            type="text"
            placeholder="First name"
          />
          <input
            className="mb-4 w-full p-2.5 border-[#c5c5c5] rounded-sm outline-[tomato]  border-2"
            type="text"
            placeholder="Last name"
          />
        </div>

        <input
          className="mb-4 w-full p-2.5 border-[#c5c5c5] rounded-sm outline-[tomato]  border-2"
          type="email"
          placeholder="Email Address"
        />
        <input
          className="mb-4 w-full p-2.5 border-[#c5c5c5] rounded-sm outline-[tomato]  border-2"
          type="text"
          placeholder="Street"
        />
        <div className="flex gap-2.5">
          <input
            className="mb-4 w-full p-2.5 border-[#c5c5c5] rounded-sm outline-[tomato]  border-2"
            type="text"
            placeholder="City"
          />
          <input
            className="mb-4 w-full p-2.5 border-[#c5c5c5] rounded-sm outline-[tomato]  border-2"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="flex gap-2.5">
          <input
            className="mb-4 w-full p-2.5 border-[#c5c5c5] rounded-sm outline-[tomato]  border-2"
            type="text"
            placeholder=" Zip Code"
          />
          <input
            className="mb-4 w-full p-2.5 border-[#c5c5c5] rounded-sm outline-[tomato]  border-2"
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          className="mb-4 w-full p-2.5 border-[#c5c5c5] rounded-sm outline-[tomato]  border-2"
          type="text"
          placeholder="Phone"
        />
      </div>

      <div className="w-full max-w-[max(40%,500px)]">
        <div className="flex-1 flex flex-col gap-5">
          <h2 className="text-3xl font-bold ">Cart Totals</h2>
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

          <div className="mt-3.5">
            <button className="border-none text-[white] bg-[tomato] w-max(15vw,200px py-4 px-12 rounded-sm cursor-pointer active:scale-95">
              PROCEED TO PAYMENT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
