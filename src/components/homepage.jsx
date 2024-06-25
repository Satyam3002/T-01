"use client";
import { useState } from "react";

export default function Homepage() {
  const [isJoinIn, setIsJoinIn] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row w-full bg-customBg font-poppins gap-x-8 p-4 lg:p-0">
      {/* Left Column */}
      <div className="lg:w-8/12 mt-16 ml-4 lg:ml-24 text-xl order-1 lg:order-1">
        <div>
          <div className="flex items-center font-poppins font-semibold gap-2 text-3xl italic">
            <span>Explore your</span>
            <span className="text-customBlue">Hobby</span>
            <span>or</span>
            <span className="text-customPurple">Passion</span>
          </div>
        </div>

        <div className="font-poppins text-sm font-light space-y-6 mt-8 leading-7">
          <div>
            Sign-in to interact with a community of fellow hobbyists and an
            eco-system of experts, teachers, suppliers, classes, workshops, and
            places to practice, participate or perform. Your hobby may be about
            visual or performing arts, sports, games, gardening, model making,
            cooking, indoor or outdoor activities.
          </div>

          <div>
            If you are an expert or a seller, you can Add your Listing and
            promote yourself, your students, products, services or events. Hop
            on your hobbyhorse and enjoy the ride.
          </div>
        </div>

        <div className="mt-20">
          <img className="w-full max-w-lg" src="Group 27.png" alt="" />
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col items-center mt-16 font-semibold text-xl w-full ml-auto mr-4 lg:mr-16 order-2 lg:order-2">
        <div className="flex justify-center space-x-10 w-full mb-8 mr-0 lg:mr-32 text-graydark">
          <div
            onClick={() => setIsJoinIn(false)}
            className={`cursor-pointer ${
              !isJoinIn
                ? "border-b-2 border-customPurple text-customPurple"
                : ""
            }`}
          >
            Sign in
          </div>
          <div
            onClick={() => setIsJoinIn(true)}
            className={`cursor-pointer ${
              isJoinIn ? "border-b-2 border-customPurple text-customPurple" : ""
            }`}
          >
            Join in
          </div>
        </div>

        {/* Conditional rendering for Explore section on small screens */}
        <div className="block lg:hidden w-full max-w-md mb-8">
          <div className="flex items-center font-poppins font-semibold gap-2 text-3xl italic justify-center">
            <span>Explore your</span>
            <span className="text-customBlue">Hobby</span>
            <span>or</span>
            <span className="text-customPurple">Passion</span>
          </div>

          <div className="font-poppins text-sm font-light space-y-6 mt-8 leading-7">
            <div>
              Sign-in to interact with a community of fellow hobbyists and an
              eco-system of experts, teachers, suppliers, classes, workshops, and
              places to practice, participate or perform. Your hobby may be about
              visual or performing arts, sports, games, gardening, model making,
              cooking, indoor or outdoor activities.
            </div>

            <div>
              If you are an expert or a seller, you can Add your Listing and
              promote yourself, your students, products, services or events. Hop
              on your hobbyhorse and enjoy the ride.
            </div>
          </div>
        </div>

        {isJoinIn ? (
          <>
            {/* Join in content */}
            <div className="flex items-center w-full max-w-md bg-customBg rounded-lg p-2 border border-black mb-4 text-sm font-semibold">
              <img
                src="google.png"
                alt="Google Logo"
                className="h-4 mr-3 ml-3"
              />
              <p className="text-black ml-16 font-poppins">
                Continue with Google
              </p>
            </div>
            <div className="flex items-center w-full max-w-md bg-customBg rounded-lg p-2 border border-black mb-4 text-sm font-semibold">
              <img
                src="Facebook.png"
                alt="Facebook Logo"
                className="h-4 mr-3 ml-2"
              />
              <p className="text-black ml-16 font-poppins">
                Continue with Facebook
              </p>
            </div>
            <div className="flex justify-normal items-center mt-4 mb-4 w-full max-w-md">
              <div className="w-42">
                <img src="line.png" alt="" />
              </div>
              <div className="mx-2 text-xs">or connect with</div>
              <div className="w-44">
                <img src="line.png" alt="" />
              </div>
            </div>
            <div className="w-full max-w-md mb-4">
              <input
                type="text"
                placeholder="Email"
                className="px-4 py-2 w-full text-xs rounded-lg bg-white text-gray"
              />
            </div>
            <div className="w-full max-w-md relative mb-4">
              <input
                type="password"
                placeholder="Password"
                className="px-4 py-2 w-full text-xs rounded-lg bg-white text-gray-700 pr-10"
              />
              <img
                src="Password.png"
                alt="Show/Hide Password"
                className="absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer"
              />
            </div>

            <div className="flex justify-between space-x-44 mr-3 ">
              <div className="flex items-center">
                <div className="border-t-4 border-white w-12"></div>{" "}
                <div className="border-t-4 border-white w-12 mx-2"></div>{" "}
                <div className="border-t-4 border-white w-12"></div>{" "}
              </div>

              <div className="text-graydark font-semibold text-xs ml-8 self-start">
                Password strength
              </div>
            </div>
            <div className="text-sm mt-4 font-thin w-full max-w-md text-center">
              By continuing, you agree to our
              <span className="font-semibold"> Terms of Service </span>
              and
              <span className="font-semibold"> Privacy Policy</span>.
            </div>
            <div className="flex items-center w-full max-w-md bg-customPurple rounded-lg p-2 border text-sm font-semibold mt-6">
              <p className="text-white ml-auto mr-auto font-poppins">
                Agree and Continue
              </p>
            </div>
          </>
        ) : (
          <>
            {/* Sign in content */}
            <div className="flex items-center w-full max-w-md bg-customBg rounded-lg p-2 border border-black mb-4 text-sm font-semibold">
              <img
                src="google.png"
                alt="Google Logo"
                className="h-4 mr-3 ml-3"
              />
              <p className="text-black ml-16 font-poppins">
                Continue with Google
              </p>
            </div>
            <div className="flex items-center w-full max-w-md bg-customBg rounded-lg p-2 border border-black mb-4 text-sm font-semibold">
              <img
                src="Facebook.png"
                alt="Facebook Logo"
                className="h-4 mr-3 ml-2"
              />
              <p className="text-black ml-16 font-poppins">
                Continue with Facebook
              </p>
            </div>
            <div className="flex justify-normal items-center mt-4 mb-4 w-full max-w-md">
              <div className="w-42">
                <img src="line.png" alt="" />
              </div>
              <div className="mx-2 text-xs">or connect with</div>
              <div className="w-44">
                <img src="line.png" alt="" />
              </div>
            </div>
            <div className="w-full max-w-md mb-4">
              <input
                type="text"
                placeholder="Email"
                className="px-4 py-2 w-full text-xs rounded-lg bg-white text-gray"
              />
            </div>
            <div className="w-full max-w-md relative mb-4">
              <input
                type="password"
                placeholder="Password"
                className="px-4 py-2 w-full text-xs rounded-lg bg-white text-gray-700 pr-10"
              />
              <img
                src="Password.png"
                alt="Show/Hide Password"
                className="absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer"
              />
            </div>
            <div className="flex justify-between font-normal text-xs w-full max-w-md mt-2">
              <div className="flex items-center">
                <img src="Checkbox.png" alt="Checkbox" />
                <span className="ml-2">Remember me</span>
              </div>
              <div className="flex items-center">
                <img src="lock.png" alt="Lock icon" />
                <span className="ml-2">Forgot Password</span>
              </div>
            </div>
            <div className="flex items-center w-full max-w-md bg-customBg rounded-lg p-2 border-2 border-black text-sm font-semibold mt-6">
              <p className="text-black ml-auto mr-auto font-poppins">
                Continue
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
