import { IoPlay } from "react-icons/io5";
import chair from "../assets/chair.png";
import chair1 from "../assets/chair1.png";

export default function DesignedToFit() {
  return (
    <div className="container mb-5 md:mb-[200px] mt-[100px]">
      <div className="flex flex-col md:flex-row gap-x-8">
        <div className="basis-[40%] flex-1">
          <div className="flex justify-center relative before:absolute before:w-full before:h-full before:bg-[#CFE9E1] before:-z-10 before:top-[30%] before:rounded-l-lg before:rounded-tr-[80%]">
            <img src={chair} alt="" className="w-[80%]" />
          </div>
        </div>
        <div className="basis-[10%] flex-1">
          <div className="flex flex-row md:flex-col justify-between content-between items-center h-full mt-32 md:mt-0">
            <div className="flex justify-center relative before:absolute before:w-full before:h-full before:bg-[#CFE9E1] before:-z-10 before:top-[30%] before:rounded-l-lg before:rounded-tr-[80%] mb-[30px]">
              <img src={chair1} alt="" className="w-[80%]" />
            </div>
            <div className="flex justify-center relative before:absolute before:w-full before:h-full before:bg-[#CFE9E1] before:-z-10 before:top-[30%] before:rounded-l-lg before:rounded-tr-[80%] mb-[30px]">
              <img src={chair1} alt="" className="w-[80%]" />
            </div>
            <div className="flex justify-center relative before:absolute before:w-full before:h-full before:bg-[#CFE9E1] before:-z-10 before:top-[30%] before:rounded-l-lg before:rounded-tr-[80%]">
              <img src={chair1} alt="" className="w-[80%]" />
            </div>
          </div>
        </div>
        <div className="basis-[50%] flex-1 self-center mt-5">
          <h3 className="font-archivo-narrow font-medium text-4xl">
            Designed to Fit <br /> Your Home
          </h3>
          <p className="text-sm my-4">
            Furniture Concepts is a contract furniture wholesaler serving the
            needs of group living environments including Community Housing,
            Treatment & Recovery Centers, Assisted Living, Camps, Conference
            Centers, Student Housing, Military Dorms & Quarters, and more!
            Behavioral Healthcare Facility Furniture.
          </p>
          <div className="flex gap-x-4">
            <a
              href="#"
              className="font-archivo-narrow font-medium text-xl px-7 py-2 bg-[#2F6F59] text-white   rounded-md inline-block "
            >
              Shop Now
            </a>
            <div className="flex items-center gap-x-2">
              <div className="w-[42px] h-[38px] rounded-full bg-[#51907D] flex items-center justify-center border-l-4  border-r-4 border-r-transparent border-l-[#F4E35C] ">
                <IoPlay color="white" />
              </div>
              <p className="font-archivo-narrow text-lg">Watch Video</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
