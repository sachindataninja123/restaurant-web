import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { RemoveItem } from "./redux/features/cartSlice";

const Card2 = ({ name, price, image, id, qty }) => {
  let dispatch = useDispatch();

  return (
    <div className="w-full h-30 p-2 my-3 shadow-lg flex justify-between">
      <div className="w-[60%] h-full flex gap-5">
        <div className="w-[50%] h-full overflow-hidden rounded-lg ">
          <img src={image} alt="" className="object-cover" />
        </div>
        <div className="w-[40%] h-full flex flex-col gap-3 text-black">
          <div className="text-lg font-semibold text-gray-500">{name}</div>
          <div className="w-30 h-12.5 bg-slate-400 flex rounded-lg overflow-hidden shadow-lg font-semibold border-2 border-green-400 text-xl">
            <button className="h-full bg-white w-[30%]  flex justify-center items-center text-green-400 hover:bg-gray-200 cursor-pointer transition-all">
              -
            </button>
            <span className="h-full bg-slate-200 w-[40%] flex justify-center items-center  text-green-400 ">
              {qty}
            </span>
            <button className="h-full bg-white w-[30%]  flex justify-center items-center  text-green-400 hover:bg-gray-200 cursor-pointer transition-all ">
              +
            </button>
          </div>
        </div>
      </div>
      <div className="text-black flex flex-col justify-start items-end gap-6">
        <span className="text-xl text-green-500 font-semibold">
          Rs {price}/-
        </span>
        <span>
          <MdDelete
            onClick={() => dispatch(RemoveItem(id))}
            className="w-7.5 h-7.5 text-red-400 cursor-pointer active:scale-95"
          />
        </span>
      </div>
    </div>
  );
};

export default Card2;
