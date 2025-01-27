import React from 'react';
import { Users, Rocket, Target, Award, ChevronRight } from 'lucide-react';

function App() {
  const founders = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=500",
      description: "Former tech executive with 15+ years experience in AI and ML."
    },
    {
      name: "James Wilson",
      role: "CTO & Co-Founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=500",
      description: "Engineering leader with background in scalable systems."
    }
  ];


  return (
    <div className="min-h-screen mt-10  ">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-4xl  text-center text-[#48304D] sm:text-5xl lg:text-6xl"style={{fontFamily:"inter",fontWeight:"600"}}>
            Founders' Journey
          </h1>
          
        </div>
      </div>

      {/* Founders Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {founders.map((founder) => (
            <div key={founder.name} className="bg-white rounded-xl shadow-lg overflow-hidden ">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={founder.image} 
                  alt={founder.name}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900">{founder.name}</h3>
                <p className="text-lg text-indigo-600">{founder.role}</p>
                <p className="mt-4 text-gray-600">{founder.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

     
     

      
    </div>
  );
}

export default App;