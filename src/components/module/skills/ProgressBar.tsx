"use client";

const ProgressBar = () => {
  const skills = [
    { name: "TavaScript", percentage: 100, color: "bg-green-500" },
    { name: "Next.js", percentage: 90, color: "bg-blue-500" },
    { name: "Redux", percentage: 90, color: "bg-purple-500" },
    { name: "SQL", percentage: 80, color: "bg-blue-500" },
    { name: "GraphQl", percentage: 20, color: "bg-pink-500" },
    { name: "Docker", percentage: 70, color: "bg-blue-600" },
  ];

  return (
    <div className="w-full space-y-6 ">
      {skills.map((skill, idx) => (
        <div key={idx} className="space-y-2">
          {/* Skill Name */}
          <p className="text-lg font-semibold text-white">{skill.name}</p>

          {/* Progress Bar */}
          <div className="relative bg-gray-200 h-1 rounded-full overflow-hidden">
            <div
              className={`absolute top-0 left-0 h-full rounded-full transition-all ${skill.color}`}
              style={{ width: `${skill.percentage}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
