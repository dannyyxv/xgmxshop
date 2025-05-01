import { FC } from "react";
import Header from "@/components/Header";

const ContactPage: FC = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-blue-500 to-purple-500">
          Contact Us
        </h1>

        <div className="max-w-xl mx-auto rounded-lg p-6 space-y-4 border border-gray-300 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 shadow-2xl text-white">
          <div>
            <h2 className="font-bold text-lg">Email</h2>
            <p className="text-gray-200">XGMX@gmail.com</p>
          </div>
          <div>
            <h2 className="font-bold text-lg">Phone</h2>
            <p className="text-gray-200">(619) 573-3293</p>
          </div>
          <div>
            <h2 className="font-bold text-lg">Location</h2>
            <p className="text-gray-200">472 Mondstadt, Crystal City, VA 20165</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
