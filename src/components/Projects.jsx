import "../main.css";
import AnimatedBlock from "./AnimatedBlock";

export default function Projects() {
  const projects = [
    {
      title: "Minecraft Modding",
      description: [
        "Created a Minecraft Mod using MCreator which includes:",
        "- Problem solving skills",
        "- Mathamatical Problems and Vector Training",
      ],
      href: "https://github.com/VoidSignalDev/the_quiet_between",
    },
    {
      title: "Tic-Tac-Toe MinMax AI",
      description: [
        "Created Tic-Tac-Toe with MinMax AI Algorithm which:",
        "- Plays perfectly and can only win or draw",
        "- Utilizes recursion and backtracking to evaluate all possible game states",
      ],
      href: "https://github.com/Adham-Hatem/tic-tac-toe",
    },
    {
      title: "Deep Q-Network in Snake",
      description: [
        "- Created the original snake game using Pure Python.",
        "- Implemented Deep Q-Network (DQN) using PyTorch",
      ],
      href: "https://github.com/Adham-Hatem/snake_Human_AI",
    },
    {
      title: "Calculator - Java",
      description: [
        "Created a Calculator using Pure Java.",
        "- Problem solving skills",
        "- Beginner Java knowledge and Mathamatical Problems",
      ],
      href: "https://github.com/Adham-Hatem/Working-Calculator",
    },
    {
      title: "Cat Window - React",
      description: [
        "Created a Cat Window component using React.",
        "- Problem solving skills",
        "- Beginner React knowledge and DOM manipulation",
      ],
      href: "./WindowCat",
    },
  ];

  return (
    <section id="projects" className="projectsSection">
      <div className="container">
        {projects.map((proj, i) => (
          <AnimatedBlock key={i} index={i} href={proj.href}>
            <p className="blockTitle">{proj.title}</p>
            {proj.description.map((desc, j) => (
              <p key={j} className="blockDescription">
                {desc}
              </p>
            ))}
          </AnimatedBlock>
        ))}
      </div>
    </section>
  );
}
