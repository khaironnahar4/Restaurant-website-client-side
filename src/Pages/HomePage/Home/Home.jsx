// import SectionHeading from "../../../Components/SectionHeading/SectionHeading"
// import { ImOpt } from "react-icons/im"
import Banner from "../Banner/Banner";
import OrderOnline from "../OrderOnline/OrderOnline";
import OurMenu from "../OurMenu/OurMenu";
// import chefService from "../../../assets/Image/chef-service.jpg";
import "./Home.css";

// simple parallax
// import SimpleParallax from "simple-parallax-js";

function Home() {
  return (
    <div>
      {/* banner */}
      <Banner></Banner>

      {/* Order online section */}
      <section className="lg:mt-[90px] md:mt-[65px] mt-11">
        <OrderOnline></OrderOnline>
      </section>

      {/* bistro boss */}
      <section className={`lg:mt-[90px] md:mt-[65px] about mt-11 w-full md:p-28 p-14 flex justify-center items-center`}>

          <div className="p-14 bg-white text-center flex flex-col items-center justify-center">
            <h1 className="font-2 text-5xl">Food Vila</h1>
            <p className="font-2 md:w-2/3 mt-6">
              Food Vila is a cozy and vibrant restaurant offering a delightful
              blend of flavors from around the world. Known for its warm
              ambiance and diverse menu, it caters to all taste buds with fresh
              ingredients and exceptional service. Whether for a casual meal or
              special occasion, Food Vila promises a memorable dining
              experience.
            </p>
          </div>
        
      </section>

      {/* from our menu */}
      <section className="lg:mt-[90px] md:mt-[65px] mt-11">
        <OurMenu></OurMenu>
      </section>

    </div>
  );
}

export default Home;
