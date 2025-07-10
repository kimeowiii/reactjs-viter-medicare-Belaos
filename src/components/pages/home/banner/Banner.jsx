import React from "react";
import { FaClinicMedical } from "react-icons/fa";

const Banner = () => {
  return (
    <>
      {/* Banner */}
      <section id="#home"  className="bg-blue-600 py-32 mx-auto px-4">
        <div className="px-4 mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <div className="text-white">
                <h1 className="text-4xl font-bold lg:max-w-[400px]">
                  Quality Healthcare Made Simple
                </h1>
                <p className=" lg:max-w-[430px] my-5">
                  Comprehensive medical services tailored to your needs with
                  care and compassion.
                </p>
              </div>
              <button className="rounded-full bg-white shadow-lg p-3 text-blue-600 font-bold">
                Book an Appointment
              </button>
            </div>
            <div className="flex justify-center">
                <div className=" bg-white/20 rounded-full p-4 h-fit">
                     <FaClinicMedical className="text-white text-8xl md:text-9xl" />
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
