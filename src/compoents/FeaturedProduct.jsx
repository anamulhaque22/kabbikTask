import featureImage from "../assets/f.png";
import f2 from "../assets/f2.png";
import f3 from "../assets/f3.png";
export default function FeaturedProduct() {
  return (
    <div className="container mt-12">
      <div className="grid  md:grid-cols-[60%_40%] gap-x-7 place-items-stretch">
        <div className="bg-[#A8E1E4] rounded-lg relative p-7 mb-6 md:0">
          <img
            src={featureImage}
            alt=""
            className="object-contain w-[700px] h-full"
          />
          <div className="absolute top-7 right-7 text-white">
            <h3 className="font-italianno text-6xl">Furniture</h3>
            <h2 className="font-italianno text-8xl">Big Sale</h2>
            <div className="flex justify-end">
              <button className="font-archivo-narrow font-medium text-[18px] px-5 py-1 bg-[#0A9CA4] rounded-full text-right">
                Odrer Now
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-7 h-full justify-between">
          <div className="flex items-center relative before:bg-[#EEA874] before:absolute before:top-0 before:right-0 before:w-[60%] before:h-full before:-z-10 after:bg-[#FFCDA7] after:absolute after:top-0 after:left-0 after:w-[40%] after:h-full after:-z-10 rounded-lg before:rounded-lg before:rounded-l-none after:rounded-lg after:rounded-r-none self-stretch">
            <div className="basis-3/6">
              <img src={f2} alt="" />
            </div>
            <div className="basis-3/6 text-center">
              <h3 className="text-3xl text-white mb-2">
                Modern <br />
                Furniture
              </h3>
              <a
                href="#"
                className="font-archivo-narrow font-medium text-[14px] px-7 py-2 bg-[#EEA874] text-white shadow-custom shadow-[#BA6424]  rounded-full inline-block "
              >
                Shop Now
              </a>
            </div>
          </div>

          <div className="relative before:bg-[#B9DB75] before:absolute before:top-0 before:right-0 before:w-[50%] before:h-full before:-z-10 after:bg-[#E2FBB2] after:absolute after:top-0 after:left-0 after:w-[50%] after:h-full after:-z-10 rounded-lg before:rounded-lg before:rounded-l-none after:rounded-lg after:rounded-r-none">
            <img src={f3} alt="" className="w-[521px]" />
            <div className="absolute top-5 right-4">
              <h3 className="text-3xl text-white">Home Comfort</h3>
              <a
                href="#"
                className="font-archivo-narrow font-medium text-[14px] px-7 py-2 bg-[#B9DB75] text-white shadow-custom shadow-[#719D18]  rounded-full inline-block "
              >
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
