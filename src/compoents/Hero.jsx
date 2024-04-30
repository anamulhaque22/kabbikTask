import { HiOutlineExternalLink } from "react-icons/hi";
import hero from "../assets/hero.png";
import hero1 from "../assets/hero1.png";
export default function Hero() {
  return (
    <div className="">
      {/* top content  */}
      <div className="bg-[linear-gradient(to_right,_#FFE481,_#FFE173_21%,_#FFD63F_100%)]">
        <div className="container flex relative">
          <div className="basis-full md:basis-3/5 pt-12 pb-20 z-10">
            <h1 className=" font-oxanium font-semibold text-primary text-5xl lg:text-7xl ">
              We <span className="text-secondary">Provide High</span>
            </h1>
            <h2 className="text-primary font-semibold text-[2rem] md:text-[2.81rem] font-oxanium">
              Quality Furniture
            </h2>
            <p className="text-[15px] font-oxanium">
              Choose and buy from wide and largest sofa collection of
              Bangladesh. Regal, the most loved and selling furniture brand in
              Bangladesh, brought to you modern, ergonomic, budget friendly
              sofa. Choose among various types of Sofa Such as Fabric Sofa,
              Wooden Sofa, Sofa cum beds, L-shaped Sofa at affordable prices,
              redefine your living room with our most unique ergonomically and
              quality crafted Sofas that suit your needs best.
            </p>
          </div>
          <div className="basis-2/5 absolute -top-3 right-0 z-0 md:z-10">
            <img src={hero} alt="" className="hidden sm:block" />
          </div>
        </div>
      </div>

      {/* bottom content  */}
      <div className="relative bg-[#FDCC1A] ">
        <div className="container z-20">
          <div className="flex justify-center md:justify-start items-center gap-x-3 pt-10 pb-10">
            <a
              href="#"
              className="font-archivo-narrow font-medium text-xl px-7 py-2 bg-[#2F6F59] text-white shadow-custom  rounded-md inline-block "
            >
              Buy Now
            </a>
            <a
              href="#"
              className="font-archivo-narrow font-medium text-xl text-white flex gap-x-2"
            >
              <HiOutlineExternalLink
                size="25px"
                className="text-primary bg-white rounded-sm"
              />
              All Product
            </a>
          </div>

          <div className="md:absolute top-24 lg:top-16 w-full left-0 z-20 pb-5 md:pb-0">
            <div className="flex gap-x-2 justify-center">
              <div className="bg-[linear-gradient(180deg,_#BDEFDE,_#70CEB1)] py-5 px-4 rounded-md">
                <img src={hero1} alt="" className="w-[170px]" />
              </div>
              <div className="bg-[linear-gradient(180deg,_#BDEFDE,_#70CEB1)] py-5 px-4 rounded-md">
                <img src={hero1} alt="" className="w-[170px]" />
              </div>
              <div className="bg-[linear-gradient(180deg,_#BDEFDE,_#70CEB1)] py-5 px-4 rounded-md">
                <img src={hero1} alt="" className="w-[170px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
