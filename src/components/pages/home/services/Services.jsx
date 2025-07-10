import React from "react";
import {
  FaClinicMedical,
  FaHeartbeat,
  FaPills,
  FaUserMd,
} from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import CardService from "../../../partials/CardService";

const Services = () => {
  return (
    <>
      {/* Services */}
      <section id="services" className="bg-white py-20 ">
        <div className="px-4 mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-blue-800 mb-4 font-bold text-3xl">
              Our Medical Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of healthcare services to meet all your
              medical needs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 justify-between">
            <CardService
              icon={FaUserMd}
              title={"General Consultation"}
              description={
                "Comprehensive health assessments and personalized treatment plans from our experienced physicians."
              }
            />
            <CardService
              icon={FaHeartbeat}
              title={"Cardiology"}
              description={
                "advanced care including diagnostics, treatment, and preventive cardiology services."
              }
            />
            <CardService
              icon={FaPills}
              title={"Internal Medicine"}
              description={
                "Specialized care for complex illnesses and chronic conditions in adults."
              }
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
