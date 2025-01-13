// import shopBanner from "../../../assets/shop/banner2.jpg"
import OurShopTab from "../OurShopTab/OurShopTab";
import "./OurShop.css"

function OurShop() {
  return (
    <div>
      {/* header */}
      <section className="our-shop w-full h-screen lg:py-28 md:py-20 py-16">
        <div className=" lg:w-2/3 mx-auto bg-[#00000080] text-white text-center lg:py-32 md:py-24 py-16">
          <h1 className="lg:text-[88px] md:text-[64px] text-[44px] font-bold font-2">
            Our Shop
          </h1>
          <p className="font-2 font-semibold">Would you like to try a dish?</p>
        </div>
      </section>

      <section className="lg:py-28 md:py-20 py-16">
        <OurShopTab></OurShopTab>
      </section>
    </div>
  );
}

export default OurShop;
