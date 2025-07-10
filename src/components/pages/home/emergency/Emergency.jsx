import React from "react";
import {
  FaAmbulance,
  FaFolder,
  FaPhone,
  FaPhoneAlt,
  FaRegClock,
} from "react-icons/fa";
import { HiOutlineRectangleStack } from "react-icons/hi2";
import { LuPhone } from "react-icons/lu";

const Emergency = () => {
  return (
    <>
      {/* Emergency */}
      <section id="emergency" className="bg-blue-600 py-20 mx-auto px-4">
        <div className="px-4 mx-auto max-w-6xl text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex justify-center items-center">
              <FaAmbulance className="text-8xl md:text-9xl" />
            </div>
            <div>
              <h2 className="mb-4 font-bold text-3xl">
                24/7 Emergency Services
              </h2>
              <p className="my-5">
                Our emergency department is staffed around the clock with
                experienced medical professionals ready to handle any medical
                crisis.
              </p>
              <div className="flex items-start gap-2 mb-4">
                <div className="bg-white/20 size-fit p-2 rounded-full">
                  <FaRegClock className="text-md text-white flex items-center justify-center" />
                </div>
                <small>Immediate response to critical conditions</small>
              </div>
              <div className="flex items-start gap-2 mb-4">
                <div className="bg-white/20 size-fit p-2 rounded-full">
                  <HiOutlineRectangleStack className="text-md text-white flex items-center justify-center" />
                </div>
                <small>State-of-the-art emergency facilities</small>
              </div>
              <div className="flex items-start gap-2">
                <div className="bg-white/20 size-fit p-2 rounded-full">
                  <LuPhone className="text-md text-white flex items-center justify-center" />
                </div>
                <small>Emergency hotline: (555) 123-4567</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Emergency;
