import React from "react";
import { Check } from "lucide-react";
function Services() {
  const data = [
    {
      title: "Project Management",
      work: [
        "Plan and Develop the project idea.",
        "Create and lead your dream team.",
        "Ensure Stakeholder satisfaction.",
        "Ensure Project Performance.",
      ],
    },
    {
      title: "Web Development",
      work: [
        "Web design.",
        "Web development support and maintenace.",
        "Web hosting.",
        "Web optimization.",
        "Web programming.",
      ],
    },
  ];
  return (
    <div className="max-w-7xl px-13 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
        {data.map((items, index) => (
          <div key={index}>
            <div className=" bg-gradient-to-b from-[#252530] to-[#1a1a1c] rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-800 h-[80px] rounded-b-[50px] flex items-center justify-center">
                <p className="text-white text-[1rem] font-bold">
                  {items.title}
                </p>
              </div>

              <div className="p-6 ">
                {items.work.map((works) => (
                  <ul>
                    <li className="py-3 flex gap-x-4 items-center">
                      <Check className="w-4 h-4 text-blue-200" />
                      {works}
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
