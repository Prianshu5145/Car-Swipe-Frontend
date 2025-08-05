import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaBars, FaTimes ,FaEnvelope} from 'react-icons/fa'; 
import { useAuth } from '../contexts/AuthContext'; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { token, role } = useAuth(); 
  const isLoggedIn = !!token;

  useEffect(() => {
    if (isLoggedIn) {
      setMenuOpen(false);
    }
  }, [isLoggedIn]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white p-1 flex justify-between items-center z-50 relative border-t-1 border-b border-gray-300 shadow-sm">
  {/* Logo */}
  <Link to="/" className="text-lg font-bold">
    <img src="https://res.cloudinary.com/dunsl7vvf/image/upload/v1754049451/Car_Swipe_Logo_with_Darker_Blue_Elements_12_zenwqo.png" alt="Car Swipe" className="h-12 w-32" />
  </Link>
  <Link
  to="/contact"
  className="inline-flex items-center px-3 py-1 text-white text-base font-semibold bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-md hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
>
  <FaEnvelope className="mr-2 h-3 w-3" />
  Contact Us
</Link>


      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-10 text-black">
       
      
          <Link
  to="/buy"
  className="inline-flex items-center px-3 py-1 text-white text-base font-semibold bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-md hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
>
  
  Buy a Car
</Link>
       
          <Link
  to="/sell"
  className="inline-flex items-center px-3 py-1 text-white text-base font-semibold bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-md hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
>
  
  Sell a Car
</Link>

        {!isLoggedIn ? (
          <Link
  to="/login"
  className="inline-flex items-center px-3 py-1 text-white text-base font-semibold bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-md hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
>
  
  Login In/ Sign Up
</Link>
        ) : (
          <div className="relative group">
            <FaUser className="cursor-pointer" />
            <div className="absolute right-0 bg-gray-700 text-white rounded hidden group-hover:block z-50">
              <Link to="/profile" className="block px-4 py-2 hover:bg-gray-600">Profile</Link>
              <Link to="/logout" className="block px-4 py-2 hover:bg-gray-600">Logout</Link>

              {role === 'buyer' && (
                <>
                
                <Link to="/sell" className="block px-4 py-2 hover:bg-gray-600">Book Inspection</Link>
                     </>     )}
              {role === 'Employee' && (
                <>
                {/* <Link to="/dummytoken" className="block px-4 py-2 hover:bg-gray-600">Dummy Token</Link> */}
                <Link to="/create-listing" className="block px-4 py-2 hover:bg-gray-600">Create Listing</Link>
                 
                  <Link to="/purchasetoken" className="block px-4 py-2 hover:bg-gray-600">Purchase Token Invoice</Link>
                  <Link to="/purchaseDeal" className="block px-4 py-2 hover:bg-gray-600">Purchase Deal Invoice</Link>
                  <Link to="/Selltoken" className="block px-4 py-2 hover:bg-gray-600">Sell Token Invoice</Link>
                  <Link to="/SellDeal" className="block px-4 py-2 hover:bg-gray-600">Sell Deal Invoice</Link>
                  {/* <Link to="/rtodoc" className="block px-4 py-2 hover:bg-gray-600">Dispatch RTO DOC</Link>
                  <Link to="/viewnoc" className="block px-4 py-2 hover:bg-gray-600">View RTO DOC</Link>
                  <Link to="/my-listings" className="block px-4 py-2 hover:bg-gray-600">My Listings</Link>
                  <Link to="/my-listings" className="block px-4 py-2 hover:bg-gray-600">Update Your Listing</Link>
                  <Link to="/my-listings" className="block px-4 py-2 hover:bg-gray-600">Delete Your Listing</Link>
                  */}
                 
                </>
              )}

              {role === 'admin' && (
                <>
                  <Link to="/update-listing" className="block px-4 py-2 hover:bg-gray-600">Update Listing</Link>
                  <Link to="/delete-listing" className="block px-4 py-2 hover:bg-gray-600">Delete Listing</Link>
                  <Link to="/uploadReview" className="block px-4 py-2 hover:bg-gray-600">Update Gallery</Link>
                  <Link to="/create-bidding" className="block px-4 py-2 hover:bg-gray-600">Create Bidding Listing</Link>
                  <Link to="/approve-dealer" className="block px-4 py-2 hover:bg-gray-600">Approve Dealer</Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
  {!isLoggedIn ? (

   <Link
  to="/login"
  className="inline-flex items-center px-2 py-1 text-white text-base font-semibold bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-md hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
>
 LOGIN
</Link>


  ) : (
    <button onClick={toggleMenu} className="text-black text-lg">
      {menuOpen ? (
        <FaTimes className="h-6 w-6" /> // Adjust the size here
      ) : (
        <FaBars className="h-6 w-6" /> // Adjust the size here
      )}
    </button>
  )}
</div>


      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 right-0 bg-gray-900 text-white w-1/2 z-50 shadow-lg">
          {isLoggedIn && (
            <>
             <Link to="/profile" className="block px-4 py-2 hover:bg-gray-600">Profile</Link>
              <Link to="/logout" className="block px-4 py-2 hover:bg-gray-600">Logout</Link>

              {role === 'buyer' && (
                <>
                  
            
                  <Link to="/buy" className="block px-4 py-2 hover:bg-gray-600">Buy a Car</Link>
                  <Link to="/sell" className="block px-4 py-2 hover:bg-gray-600">Sell a Car</Link>
                  <Link to="/sell" className="block px-4 py-2 hover:bg-gray-600">Book Inspection of Car</Link>
                  
                </>
              )}

              {role === 'Employee' && (
                <>
                <Link to="/dummytoken" className="block px-4 py-2 hover:bg-gray-600">Dummy Token</Link>
                  <Link to="/create-listing" className="block px-4 py-2 hover:bg-gray-600">Create Listing</Link>
                 
                  
                 
                  
                  
                  
                  <Link to="/purchasetoken" className="block px-4 py-2 hover:bg-gray-600">Purchase Token Invoice</Link>
                  <Link to="/purchaseDeal" className="block px-4 py-2 hover:bg-gray-600">Purchase Deal Invoice</Link>
                  <Link to="/Selltoken" className="block px-4 py-2 hover:bg-gray-600">Sell Token Invoice</Link>
                  <Link to="/SellDeal" className="block px-4 py-2 hover:bg-gray-600">Sell Deal Invoice</Link>
                  <Link to="/rtodoc" className="block px-4 py-2 hover:bg-gray-600">Dispatch RTO DOC</Link>
                  <Link to="/viewnoc" className="block px-4 py-2 hover:bg-gray-600">View RTO DOC</Link>
                  <Link to="/my-listings" className="block px-4 py-2 hover:bg-gray-600">My Listings</Link>
                 
                  <Link to="/my-listings" className="block px-4 py-2 hover:bg-gray-600">Update Your Listing</Link>
                  <Link to="/my-listings" className="block px-4 py-2 hover:bg-gray-600">Delete Your Listing</Link>
                  
              
                  
                </>
              )}

              {role === 'admin' && (
                <>
                  <Link to="/update-listing" className="block px-4 py-2 hover:bg-gray-600">Update Listing</Link>
                  <Link to="/delete-listing" className="block px-4 py-2 hover:bg-gray-600">Delete Listing</Link>
                  <Link to="/uploadReview" className="block px-4 py-2 hover:bg-gray-600">Update Gallery</Link>
                  <Link to="/create-bidding" className="block px-4 py-2 hover:bg-gray-600">Create Bidding Listing</Link>
                  <Link to="/approve-dealer" className="block px-4 py-2 hover:bg-gray-600">Approve Dealer</Link>
                </>
              )}
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
