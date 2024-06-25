export default function Testimonial() {
    return (
        <div className="flex justify-center my-4 mb-8">
            <div className="bg-customBg border border-lightgray rounded-lg p-6 space-y-6 items-center max-w-5xl">
                <div className="font-semibold flex items-center space-x-4">
                    <img src="quote.png" alt="Quote Icon" className="w-6 h-6" />
                    <p className="text-lg lg:text-xl">Testimonials</p>
                </div>
                <div className="font-light text-sm lg:text-base text-graydark">
                    In a fast-growing and ever-changing city like Bangalore, it sometimes becomes very difficult to find or connect with like-minded people. Websites like hobbycue.com are a great service that helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured are of great quality as they come recommended by people in the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
                </div>
                <div className="flex justify-between items-center">
                    <div className="w-80 h-24 flex items-center">
                        <img src="audio.png" alt="Audio Icon" className="w-full h-auto" />
                    </div>
                    <div className="w-52 h-24 flex items-center ml-auto">
                        <img src="user.png" alt="User Icon" className="w-full h-auto" />
                    </div>
                </div>
            </div>
        </div>
    );
}
