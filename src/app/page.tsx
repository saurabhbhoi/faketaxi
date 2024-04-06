// pages/index.tsx

import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
     
      <div className="max-w-3xl w-full px-4">
        <nav className="flex justify-between items-center py-6">
          <div>
            <Image src="/faktaxulogo.png" alt="Uber Logo" width={120} height={50} />
          </div>
          <div>

  <Link href="/login" legacyBehavior>
    <a className="text-gray-700 mr-4">Log in</a>
  </Link>
  <Link href="/signup" legacyBehavior>
    <a className="text-gray-700">Sign up</a>
  </Link>
</div>
        </nav>
        <div className="bg-black p-8 rounded-lg shadow-lg">
          <h1 className="font-bold mb-6">Where to?</h1>
          <h1 className = "text-2xl font-bold ">Aniket , Chagan yala aedit karanyacha pryantna kara local machin var </h1>

          <input
            type="text"
            placeholder="Enter your destination"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <button className="mt-4 bg-blue-500 text-white px-4 py-3 rounded-lg w-full font-semibold hover:bg-blue-600">
            Get a ride
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
