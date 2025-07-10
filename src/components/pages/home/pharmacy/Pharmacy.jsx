import React from "react";
import { FaPills } from "react-icons/fa";

const Pharmacy = () => {
  return (
    <>
      {/* Pharmacy */}
      <section id="pharmacy" className="bg-white py-20 mx-auto px-4">
        <div className="px-4 mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-blue-800  font-bold text-3xl">
                In-House Pharmacy{" "}
              </h2>
              <p className="my-4">
                Our fully-stocked pharmacy provides convenient access to
                medications with expert advice from our licensed pharmacists.
              </p>
              <div>
                <ul>
                  <li className="flex gap-2">
                    <div className="flex items-center">
                      <FaPills className="text-blue-600" />
                    </div>
                    <div className="leading-none">
                      <div className="text-blue-800 font-bold">
                        <small>Prescription Medications</small>
                      </div>
                      <div>
                        <small>
                          Fast filling of all your prescription needs.
                        </small>
                      </div>
                    </div>
                  </li>
                  <li className="flex gap-2 my-4">
                    <div className="flex items-center">
                      <FaPills className="text-blue-600" />
                    </div>
                    <div className="leading-none">
                      <div className="text-blue-800 font-bold">
                        <small>Over-the-Counter</small>
                      </div>
                      <div>
                        <small>
                          Wide selection of health and wellness products
                        </small>
                      </div>
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <div className="flex items-center">
                      <FaPills className="text-blue-600" />
                    </div>
                    <div className="leading-none">
                      <div className="text-blue-800 font-bold">
                        <small>Compounding Services</small>
                      </div>
                      <div>
                        <small>
                          Custom medication formulations when needed
                        </small>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className=" bg-blue-100 size-fit p-8 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <FaPills className="text-blue-600 text-8xl md:text-9xl" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pharmacy;
