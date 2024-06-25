export default function Start() {
    return (
        <div className="bg-lightblue min-h-screen flex flex-col justify-between mb-14">
            <div className="flex flex-col items-start justify-center flex-grow mt-24 lg:ml-24">
                <div className="flex items-center font-poppins font-semibold gap-2 text-3xl italic">
                    <span>Your</span>
                    <span className="text-customPurple">Hobby</span>
                    <span>Your</span>
                    <span className="text-customBlue">Community</span>
                </div>
                <div className="mt-4 lg:mt-12 lg:ml-24">
                    <button className="bg-customPurple text-white font-semibold mt-6 px-4 py-2 rounded-md border-2 border-customPurple lg:w-32">
                        Get Started
                    </button>
                </div>
            </div>
            <div className="flex justify-start lg:ml-24 mt-6 mb-6 space-x-28">
                <img src="cm1.png" alt="Community 1" className="w-3/5 lg:w-4/12 h-auto" /> 
                <img src="cm2.png" alt="Community 2" className="w-auto lg:w-4/12 h-auto ml-4" /> 
            </div>
        </div>
    );
}
