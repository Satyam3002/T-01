export default function Footer() {
    return (
      <div className="flex flex-col lg:flex-row lg:space-x-2 justify-evenly font-poppins mb-24">
        {/* Column 1 */}
        <div className="text-base space-y-1 mb-6 lg:mb-0 text-center lg:text-left">
          <div className="font-bold">Hobbycue</div>
          <div>About Us</div>
          <div>Our Services</div>
          <div>Work with Us</div>
          <div>FAQ</div>
          <div>Contact Us</div>
        </div>
  
        {/* Column 2 */}
        <div className="text-base space-y-1 mb-6 lg:mb-0 text-center lg:text-left">
          <div className="font-bold">How Do I</div>
          <div>Sign Up</div>
          <div>Add a Listing</div>
          <div>Claim a Listing</div>
          <div>Post a Query</div>
          <div>Add a Blog Post</div>
          <div>Other queries</div>
        </div>
  
        {/* Column 3 */}
        <div className="text-base space-y-1 mb-6 lg:mb-0 text-center lg:text-left">
          <div className="font-bold">Quick Links</div>
          <div>Listings</div>
          <div>Blog Posts</div>
          <div>Shop/Store</div>
          <div>Community</div>
        </div>
  
        {/* Column 4 */}
        <div className="text-base space-y-4 text-center lg:text-left">
          <div className="font-bold">Social Media</div>
          <div className="flex justify-center lg:justify-start space-x-4">
            <img src="fb.png" alt="Facebook" />
            <img src="twitter.png" alt="Twitter" />
            <img src="insta.png" alt="Instagram" />
            <img src="pintrest.png" alt="Pinterest" />
            <img src="yt.png" alt="YouTube" />
            <img src="tg.png" alt="Telegram" />
            <img src="google1.png" alt="Google" />
            <img src="msg.png" alt="Message" />
          </div>
  
          <div className="flex flex-col justify-center items-center lg:items-start space-y-6 mt-6 lg:mt-0">
            <div className="font-bold">Invite Friends</div>
            <div className="flex items-center w-full h-10 bg-white border border-gray-300 rounded-lg overflow-hidden">
              <input
                type="text"
                placeholder="Email Id"
                className="w-full h-full px-4 py-2 bg-white text-black focus:outline-none"
              />
              <div className="p-4 bg-customPurple text-white cursor-pointer">
                Invite
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  