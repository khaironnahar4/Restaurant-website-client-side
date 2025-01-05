import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="lg:mt-[90px] md:mt-[65px] mt-11">
      <div className="w-full md:flex justify-between items-start text-white">
        <div className="bg-[#1F2937] md:w-1/2 flex flex-col text-center md:h-[320px] justify-center py-9 items-center">
          <h1 className="text-2xl text-white">Contact Us</h1>
          <p>
            Kandirpar, Cumilla.
            <br />
            +880 1611112222
          </p>
          <p>Mon - Fri: 08:00 - 22:00</p>
          <p>Sat - Sun: 10:00 - 23:00</p>
        </div>

        <div className="bg-[#111827] md:w-1/2 md:h-[320px] py-9 flex flex-col text-center justify-center items-center">
          <h1 className="text-2xl text-white">Follow Us</h1>
          <p>Just on social media.</p>
          <div className="grid grid-flow-col gap-4 mt-4">
            <a>
              <FaFacebookF />
            </a>
            <a>
              <FaInstagram />
            </a>
            <a>
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
      <div className="footer footer-center bg-black text-white p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Food Vila.
          </p>
        </aside>
      </div>
    </footer>
  );
}

export default Footer;
