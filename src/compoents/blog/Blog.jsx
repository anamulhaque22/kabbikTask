import blog from "../../assets/blog.png";
export default function Blog() {
  return (
    <div>
      <img src={blog} alt="" className="w-full" />
      <div className="font-archivo-narrow">
        <h4 className="text-lg">
          Interior design is the art, the interior designer is the artist.
        </h4>
        <div className="w-[60px] h-[4px] bg-[#FFDD5F] my-2"></div>
        <p className="text-sm">October 02, 2022 / Hastheme / in Chair</p>
      </div>
    </div>
  );
}
