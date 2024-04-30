import product1 from "../../assets/product1.png";
import StarRating from "../StarRating";

export default function Product() {
  return (
    <div className="bg-[#51907D] rounded-xl rounded-tr-[100px] relative ">
      <div className="py-5 px-4 rounded-md flex justify-center absolute w-full h-full -top-[80%]">
        <img src={product1} alt="" className="w-[345px] h-[223px]" />
      </div>
      <div className="flex flex-col items-center gap-y-2 pb-7 pt-16 text-white">
        <h3 className="font-archivo-narrow text-[22px]">
          Tulip Chair Furniture
        </h3>
        <StarRating />
        <p>$12.09</p>
        <button className="font-archivo-narrow font-medium text-base text-primary bg-[#FDCC1A] px-5 py-1 rounded-sm">
          Buy Now
        </button>
      </div>
    </div>
  );
}
