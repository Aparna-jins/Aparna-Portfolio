const skills = [
  // Languages
  { name: "HTML5", level: 95, category: "Languages" },
  { name: "CSS3", level: 90, category: "Languages" },
  { name: "Javascript", level: 90, category: "Languages" },
  { name: "Python", level: 75, category: "Languages" },

  // Framework
  { name: "React.js", level: 95, category: "Framework" },
  { name: "Redux", level: 75, category: "Framework" },
  { name: "Node.js", level: 80, category: "Framework" },
  { name: "Tailwind CSS", level: 85, category: "Framework" },
  { name: "Svelte", level: 75, category: "Framework" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Babel", level: 85, category: "tools" },
  { name: "Jira", level: 85, category: "tools" },
  { name: "Postman", level: 95, category: "tools" },
  { name: "WebPack/Parcel/Vite", level: 90, category: "tools" },
  // Soft Skills
  { name: "Leadership", level: 95, category: "softskills" },
  { name: "Problem Solving", level: 95, category: "softskills" },
  { name: "Attention to Details", level: 95, category: "softskills" },
  { name: "Analytical thinking", level: 95, category: "softskills" },
  { name: "Curiosity", level: 95, category: "softskills" },
];

const categories = ["all", "Languages", "Framework", "tools", "softskills"];
import React, { useState } from "react";
import { cn } from "../lib/utils";

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills=skills.filter((skill)=>activeCategory==="all"||skill.category===activeCategory)
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My<span className="text-primary"> Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category,key) => (
            <button
            key={key}
            onClick={()=>setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>

              <div className="w-full secondary-bg/50 h-2 rounded-full overflow-hidden">
                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease_out]" style={{width:skill.level+"%"}} />
              </div>
              <div className="text-right mt-1"><span className="text-sm text-primary-foreground">{skill.level}%</span></div>
            </div>
            
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
