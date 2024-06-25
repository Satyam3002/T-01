export default function Box() {
  return (
    <div className="flex flex-col justify-start w-full p-4 lg:p-0 mt-16 mb-16 space-y-8 ">
      {/* First Row */}
      <div className="flex flex-col lg:flex-row w-full max-w-6xl mx-auto space-y-8 lg:space-y-0 lg:space-x-8">
        {/* First Box */}
        <div className="flex-1 border-2 border-lightgray rounded-xl p-6 flex flex-col">
          <div className="flex items-center mt-8 gap-4">
            <img src="people.png" alt="People Icon" />
            <p>People</p>
          </div>
          <div className="flex-grow">
            <p className="mt-7 mb-2 font-light text-lg">
              Find a teacher, coach, or expert for your hobby interest in
              <br />
              your locality. Find a partner, teammate, accompanist or
              <br />
              collaborator.
            </p>
          </div>
          <div className="mt-auto">
            <button className="bg-white text-customPurple mt-6 px-3 py-1 rounded-md border-2 border-customPurple w-32 h-10">
              Connect
            </button>
          </div>
        </div>

        {/* Second Box */}
        <div className="flex-1 border-2 border-lightgray rounded-xl p-6 flex flex-col">
          <div className="flex items-center mt-8 gap-4">
            <img src="place.png" alt="Place Icon" />
            <p>Place</p>
          </div>
          <div className="flex-grow">
            <p className="mt-7 mb-2 font-light text-lg">
              Find a class, school, playground, auditorium, studio, shop
              <br />
              or an event venue. Book a slot at venues that allow
              <br />
              booking through hobbycue.
            </p>
          </div>
          <div className="mt-auto">
            <button className="bg-white text-customPurple mt-6 px-3 py-1 rounded-md border-2 border-customPurple w-32 h-10">
              Connect
            </button>
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="flex flex-col lg:flex-row w-full max-w-6xl mx-auto space-y-4 lg:space-y-0 lg:space-x-8">
        {/* Third Box */}
        <div className="flex-1 border-2 border-lightgray rounded-xl p-6 flex flex-col">
          <div className="flex items-center mt-8 gap-4">
            <img src="bag.png" alt="Equipment Icon" />
            <p>Equipment</p>
          </div>
          <div className="flex-grow">
            <p className="mt-7 mb-2 font-light text-lg">
              Find equipment or supplies required for your hobby. Buy,
              <br />
              rent or borrow from shops, online stores or from
              <br />
              community members.
            </p>
          </div>
          <div className="mt-auto">
            <button className="bg-white text-customPurple mt-6 px-3 py-1 rounded-md border-2 border-customPurple w-32 h-10">
              Connect
            </button>
          </div>
        </div>

        {/* Fourth Box */}
        <div className="flex-1 border-2 border-lightgray rounded-xl p-6 flex flex-col">
          <div className="flex items-center mt-8 gap-4">
            <img src="schedule.png" alt="Events Icon" />
            <p>Events</p>
          </div>
          <div className="flex-grow">
            <p className="mt-7 mb-2 font-light text-lg">
              Find events, meetups and workshops related to your
              <br />
              hobby. Register or buy tickets online.
            </p>
          </div>
          <div className="mt-auto">
            <button className="bg-white text-customPurple mt-6 px-3 py-1 rounded-md border-2 border-customPurple w-32 h-10">
              Connect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
