import React from "react";

const CardDoctor = ({ icon: Icon, name, specialization, description }) => {
  return (
    <>
      {/* Card */}
      <div className="bg-white hover:shadow-lg shadow-md p-8 rounded-lg transition duration-300">
        <div>
          <div className=" bg-blue-100 size-32 rounded-full flex items-center justify-center mb-6 mx-auto">
            <Icon className="text-blue-600 text-4xl" />
          </div>
          <div className="text-center">
             <h3 className="text-blue-800 font-bold text-xl mb-3">{name}</h3>
             <p className="text-blue-600">{specialization}</p>
             <p className="text-gray-600 mt-4">{description}</p>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default CardDoctor;
