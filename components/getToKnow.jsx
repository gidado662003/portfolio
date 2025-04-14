import React from "react";
import { Briefcase, Users, Package } from "lucide-react";

function GetToKnow() {
  const data = [
    {
      id: 1,
      icon: <Briefcase className="w-8 h-8 text-blue-400" />,
      title: "Experience",
      description: "3+ years working",
    },
    {
      id: 2,
      icon: <Users className="w-8 h-8 text-blue-400" />,
      title: "Clients",
      description: "15 - 20 worldwide",
    },
    {
      id: 3,
      icon: <Package className="w-8 h-8 text-blue-400" />,
      title: "Projects",
      description: "40+ completed",
    },
  ];

  return (
    <div className="mt-48 px-4 max-w-6xl mx-auto text-center">
  
      <div className="mb-16">
        <h1 className="text-lg font-medium text-blue-400 uppercase tracking-widest">
          Get To Know
        </h1>
        <h2 className="text-4xl font-bold text-white mt-4 relative inline-block">
          About Me
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-500 rounded-full mt-2"></span>
        </h2>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 mb-20">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex-1 bg-gradient-to-b from-[#252525] to-[#1a1a1a] border border-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="flex flex-col items-center h-full">
              <div className="mb-6 bg-[#2a2a2a] p-4 rounded-full shadow-inner">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Description and CTA */}
      <div className="max-w-3xl mx-auto">
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          I'm a passionate Software Engineer specializing in designing software,
          algorithms, and applications. With expertise in database design,
          version control systems, and relational databases, I bring solutions
          to life using technologies like C, C++, Java, HTML, CSS, JavaScript,
          and Agile methodologies.
        </p>

        <button className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-2xl group">
          <span className="relative z-10">Let's Talk</span>
          <span className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
        </button>
      </div>
    </div>
  );
}

export default GetToKnow;
