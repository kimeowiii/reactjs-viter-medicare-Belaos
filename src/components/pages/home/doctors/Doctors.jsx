import React from "react";
import CardDoctor from "../../../partials/CardDoctor";
import { FaUserMd } from "react-icons/fa";

const Doctors = () => {
  return (
    <>
      {/* Doctors */}
      <section id="doctors" className="bg-gray-50 py-20 ">
        <div className="px-4 mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-blue-800 mb-4 font-bold text-3xl">
              Meet our Specialists
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our eam of board-certified physicians are dedicated to your health and wellbeing.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 justify-between">
            <CardDoctor icon={FaUserMd} name={"Dr. Sarah Johnson"} specialization={"General Practitioner"} description={"With over 15 years of experience, Dr. Johnson provides compassionate primary care."} />
            <CardDoctor icon={FaUserMd} name={"Dr. Michael Chen"} specialization={"Cardiologist"} description={"Specializing in interventional cardiology with a focus on preventive care."} />
            <CardDoctor icon={FaUserMd} name={"Dr. Emily Rodriguez"} specialization={"Pediatrician"} description={"Dedicated to providing exceptional care for infants, children, and adolescents."} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Doctors;
