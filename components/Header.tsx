const Header = () => (
  <header className="flex justify-between items-center p-5 bg-black text-white fixed top-0 w-full z-20">
    <div className="text-2xl font-bold">Luxury Car Rentals</div>
    <nav>
      <a href="#fleet" className="mr-5">
        Fleet
      </a>
      <a href="#brands" className="mr-5">
        Brands
      </a>
      <a href="#stats" className="mr-5">
        Stats
      </a>
      <a href="#testimonials" className="mr-5">
        Testimonials
      </a>
      <a href="#contact" className="mr-5">
        Contact
      </a>
    </nav>
    <button className="bg-blue-500 text-white px-5 py-3 rounded">
      Book Now
    </button>
  </header>
);

export default Header;
