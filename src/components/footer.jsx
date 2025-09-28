import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <div className="bg-gray-800 text-white py-10 px-6 flex flex-wrap justify-between items-start gap-10" >
      
      
      <div className="max-w-sm">
        <h1 className="text-4xl font-bold text-yellow-500 mb-3">SPORTS-SHOP</h1>
        <p className="text-lg leading-relaxed">
          We bring you high-quality products at unbeatable prices. Our mission is to make online shopping simple, secure, and enjoyable for everyone.
        </p>
        <div className="flex gap-4 mt-5 text-2xl">
          <a href="#"><FaFacebookF className="hover:text-yellow-500 cursor-pointer" /></a>
          <a href="#"><FaInstagram className="hover:text-yellow-500 cursor-pointer" /></a>
          <a href="#"><FaTwitter className="hover:text-yellow-500 cursor-pointer" /></a>
          <a href="#"><FaYoutube className="hover:text-yellow-500 cursor-pointer" /></a>
        </div>
      </div>

      
      <div className="max-w-sm">
        <h2 className="text-3xl font-semibold text-yellow-500 mb-3">Subscribe to Our Newsletter</h2>
        <p className="text-lg leading-relaxed mb-4">
          Sign up to receive exclusive offers, latest product updates, and special discounts straight to your inbox.
        </p>
        <div className="flex items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 rounded-4xl text-white text-sm border-2 mr-3 border-yellow-600 text-black w-64"
            
          />
          <button className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-4xl font-bold hover:bg-yellow-400">
            Subscribe
          </button>
        </div>
      </div>

      
      <div className="max-w-sm">
        <h2 className="text-3xl font-semibold text-yellow-500 mb-3">Contact Us</h2>
        <p className="flex items-center text-lg mb-2" id="c">
          <FaPhoneAlt className="mr-3 text-yellow-500" /> 9956xxxxxx
        </p>
        <p className="flex items-center text-lg">
          <MdEmail className="mr-3 text-yellow-500" /> support@sports-shop.com
        </p>
      </div>
    </div>
  );
}

export default Footer;
