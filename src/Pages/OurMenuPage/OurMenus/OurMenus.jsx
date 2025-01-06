import SectionHeading from "../../../Components/SectionHeading/SectionHeading"
import SectionCoverPage from "../../SharedComponents/SectionCoverPage/SectionCoverPage"
import OrderMenuLayout from "../OrderMenuLayout/OrderMenuLayout"
import "./OurMenus.css"
import pizza from "../../../assets/menu/pizza-bg.jpg"
import salad from "../../../assets/menu/salad-bg.jpg"
import soup from "../../../assets/menu/soup-bg.jpg"
import dessert from "../../../assets/menu/dessert-bg.jpeg"

function OurMenus() {
  return (
    <div>
      {/* header */}
      <section className="our-menu w-full h-screen lg:py-28 md:py-20 py-16">
        <div className=" lg:w-2/3 mx-auto bg-[#00000080] text-white text-center lg:py-32 md:py-24 py-16">
          <h1 className="lg:text-[88px] md:text-[64px] text-[44px] font-bold font-2">Our Menu</h1>
          <p className="font-2 font-semibold">Would you like to try a dish?</p>
        </div>
      </section>

      {/* today's offer */}
      <section className="lg:mt-[90px] md:mt-[65px] mt-11">
        <SectionHeading subHeading="Don't Miss" heading="today's offer"></SectionHeading>
        <div>
          <OrderMenuLayout menuName="offered" buttonName="order your favourite food"></OrderMenuLayout>
        </div>
      </section>

      {/* dessert */}
      <section className="mt-11">
        <SectionCoverPage img={dessert} heading="desserts"></SectionCoverPage>
        <div className="mt-16">
        <OrderMenuLayout menuName="dessert" buttonName="Order Your Favourite Food" ></OrderMenuLayout>
        </div>
      </section>

      {/* pizza */}
      <section className="mt-11">
        <SectionCoverPage img={pizza} heading="pizza"></SectionCoverPage>
        <div className="mt-16">
        <OrderMenuLayout menuName="pizza" buttonName="Order Your Favourite Food" ></OrderMenuLayout>
        </div>
      </section>

        {/* salads */}
        <section className="mt-11">
        <SectionCoverPage img={salad} heading="salad"></SectionCoverPage>
        <div className="mt-16">
        <OrderMenuLayout menuName="salad" buttonName="Order Your Favourite Food" ></OrderMenuLayout>
        </div>
      </section>

      {/* soup */}
      <section className="mt-11">
        <SectionCoverPage img={soup} heading="soup"></SectionCoverPage>
        <div className="mt-16">
        <OrderMenuLayout menuName="soup" buttonName="Order Your Favourite Food" ></OrderMenuLayout>
        </div>
      </section>
    </div>
  )
}

export default OurMenus