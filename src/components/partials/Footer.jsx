import React from "react";
import { FaClinicMedical } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className=" bg-blue-600 py-10 mx-auto px-4">
        <div className="px-4 mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <div className="flex items-center space-x-2  mb-4">
                  <FaClinicMedical className="text-white text-2xl" />
                  <span className="font-bold text-xl text-white ">
                    Medicare+
                  </span>
                </div>
                <p className="text-blue-100">
                  Providing compassionate healthcare services since 2005.
                </p>
              </div>
              <di>
                <h4 className="text-white font-bold text-xl mb-4">
                  Quick Links
                </h4>
                <div className="text-blue-100 leading-8 ">
                  <ul>
                    <li>
                      <a
                        className="hover:text-blue-800 transition-all duration-300"
                        href="#"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        className="hover:text-blue-800 transition-all duration-300"
                        href="#services"
                      >
                        Services
                      </a>
                    </li>
                    <li>
                      <a
                        className="hover:text-blue-800 transition-all duration-300"
                        href="#doctors"
                      >
                        Doctors
                      </a>
                    </li>
                    <li>
                      <a
                        className="hover:text-blue-800 transition-all duration-300"
                        href="#emergency"
                      >
                        Emergency
                      </a>
                    </li>
                    <li>
                      <a
                        className="hover:text-blue-800 transition-all duration-300"
                        href="#pharmacy"
                      >
                        Pharmacy
                      </a>
                    </li>
                  </ul>
                </div>
              </di>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h4 className="text-white font-bold text-xl  mb-4">
                  Contact Us
                </h4>
                <div className="text-blue-100">
                  <ul>
                    <li>123 Medical Center Drive</li>
                    <li>Healthville, HV 12345</li>
                    <li>Phone: (555) 987-6543</li>
                    <li>Email: info@medicareplus.com</li>
                  </ul>
                </div>
              </div>
              <div>
                <h4 className="text-white font-bold text-xl  mb-4">
                  Opening Hours
                </h4>
                <div className="text-blue-100 leading-8">
                  <ul>
                    <li>Monday - Friday: 8am - 8pm</li>
                    <li>Saturday: 9am-5pm</li>
                    <li>Sunday: Emergency only</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center border-t border-blue-800">
            <p className="text-blue-100 mt-10">
              &copy; 2025 MediCare+. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
