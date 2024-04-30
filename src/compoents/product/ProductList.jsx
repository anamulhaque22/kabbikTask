import Product from "./Product";

export default function ProductList() {
  return (
    <div className="container">
      <div className="text-center mt-7 md:mt-24 mb-24">
        <h1 className=" font-oxanium font-semibold text-primary text-[25px]">
          We <span className="text-secondary">Provide High</span>
        </h1>
        <p className="text-xs font-oxanium w-8/12 mx-auto">
          Furniture Concepts is a contract furniture wholesaler serving the
          needs of group living environments including Community Housing,
          Treatment & Recovery Centers, Assisted Living, Camps, Conference
          Centers, Student Housing, Military Dorms & Quarters, and more!
          Behavioral Healthcare Facility Furniture.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-44 gap-x-6 gap-y-44">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}
