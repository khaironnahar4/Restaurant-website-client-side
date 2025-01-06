// import SectionHeading from "../../../Components/SectionHeading/SectionHeading"
// import { ImOpt } from "react-icons/im"
import SectionHeading from "../../../Components/SectionHeading/SectionHeading";
import Banner from "../Banner/Banner";
import ChefRecommended from "../ChefRecommended/ChefRecommended";
import OrderOnline from "../OrderOnline/OrderOnline";
import OurMenu from "../OurMenu/OurMenu";
// import chefService from "../../../assets/Image/chef-service.jpg";
import feature from "../../../assets/Image/featured.jpg"
import "./Home.css";
import Testimonial from "../Testimonial/Testimonial";

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
      <section
        className={`lg:mt-[90px] md:mt-[65px] about mt-11 w-full md:p-28 p-14 flex justify-center items-center`}
      >
        <div className="p-14 bg-white text-center flex flex-col items-center justify-center">
          <h1 className="font-2 text-5xl">Food Vila</h1>
          <p className="font-2 md:w-2/3 mt-6">
            Food Vila is a cozy and vibrant restaurant offering a delightful
            blend of flavors from around the world. Known for its warm ambiance
            and diverse menu, it caters to all taste buds with fresh ingredients
            and exceptional service. Whether for a casual meal or special
            occasion, Food Vila promises a memorable dining experience.
          </p>
        </div>
      </section>

      {/* from our menu */}
      <section className="lg:mt-[90px] md:mt-[65px] mt-11">
        <OurMenu></OurMenu>
      </section>

      {/* call us */}
      <section className="bg-black lg:py-24 md:py-16 py-10 lg:mt-[90px] md:mt-[65px] mt-11">
        <p className="font-2 text-5xl font-semibold text-white text-center">
          Call Us: +88 0192345678910
        </p>
      </section>

      {/* chef recommended */}
      <section className="lg:mt-[90px] md:mt-[65px] mt-11">
        <ChefRecommended></ChefRecommended>
      </section>

      {/* from our menu */}
      <section className="lg:mt-[90px] md:mt-[65px] mt-11 our-menu w-full
      h-screen lg:py-32 md:py-20 py-11 text-white backdrop-filter backdrop-opacity-25">
        <SectionHeading
          subHeading="Check It Out"
          heading="from our menu"
        ></SectionHeading>
        <div className="lg:flex justify-between items-center lg:w-2/3 mx-auto gap-6">
          <div className="lg:w-1/2">
            <img src={feature} alt="feature image" />
          </div>
          <div className="lg:w-1/2">
            <p>
              <span>March 20, 2023</span> <br /> <span>WHERE CAN I GET SOME?</span> <br />Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Error voluptate facere, deserunt
              dolores maiores quod nobis quas quasi. Eaque repellat recusandae
              ad laudantium tempore consequatur consequuntur omnis ullam maxime
              tenetur.
            </p>
            <div className="mt-4">
              <button className="py-2 px-3 border-b-2 border-white text-white hover:bg-white hover:text-black rounded-md">Read More</button>
            </div>
          </div>
        </div>
      </section>

      {/* testimonila */}
      <section className="lg:mt-[90px] md:mt-[65px] mt-11">
        <SectionHeading subHeading="What Our Clients Say" heading="testimonials"></SectionHeading>
        <Testimonial></Testimonial>
      </section>

    </div>
  );
}

export default Home;
