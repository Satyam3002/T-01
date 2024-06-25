export default function Add() {
    return (
        <div className="bg-lightblue font-poppins flex justify-center items-center mb-16">
            <div className="rounded-lg p-6 lg:p-14 my-14 border-2 bg-white border-lightgray lg:mx-14">
                <div className="flex items-center space-x-4">
                    <img src="Add.png" alt="Add Icon" className="w-10 h-10" />
                    <p className="font-semibold text-lg">Add your own</p>
                </div>
                <div className="text-lg mt-6 font-light">
                    Are you a teacher or expert? Do you sell or rent out equipment, venue
                    or event tickets? Or, you know someone who should <br className="hidden lg:inline" />
                    be on hobbycue? Go ahead and Add your Own page
                </div>
                <div className="mt-6">
                    <button className="bg-white text-customPurple px-8 py-2 rounded-md border-2 border-customPurple">
                        Connect
                    </button>
                </div>
            </div>
        </div>
    );
}
