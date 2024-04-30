import Blog from "./Blog";

export default function BlogItems() {
  return (
    <div className="container mb-7">
      <div className="text-center mt-8 md:mt-24">
        <h1 className=" font-oxanium font-semibold text-primary text-[25px]">
          Out <span className="text-secondary">Blog</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-6 gap-x-6 gap-y-6">
        <Blog />
        <Blog />
        <Blog />
        <Blog />
      </div>
    </div>
  );
}
