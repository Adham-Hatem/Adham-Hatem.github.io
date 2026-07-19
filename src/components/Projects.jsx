import { useEffect } from "react";
import "../main.css";
import AnimatedBlock from "./AnimatedBlock";
import { useState } from "react";
import WindowCat from "./windowCat";
import { CatTypeProvider } from "../context/CatTypeContext";
import { CloudProvider } from "../context/cloudContext";
import { MoonProvider } from "../context/moonContext";

function WindowCatPreview() {
  return (
    <CatTypeProvider>
      <CloudProvider>
        <MoonProvider>
          <WindowCat />
        </MoonProvider>
      </CloudProvider>
    </CatTypeProvider>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(-1);
  const [popupPosition, setPopupPosition] = useState(null);

  const projects = [
    {
      title: "The Quiet Between - Minecraft Mod",
      description: [
        "A Minecraft mod created using MCreator, focused on gameplay systems, custom mechanics, and problem solving.",
        "• Designed and implemented custom interactions and features.",
        "• Applied mathematical concepts and vector logic for game mechanics.",
        "• Improved debugging and system design skills through iterative development.",
      ],
      github: "https://github.com/VoidSignalDev/the_quiet_between",
    },
    {
      title: "Tic-Tac-Toe MinMax AI",
      description: [
        "A Tic-Tac-Toe game powered by the MinMax algorithm, allowing the AI to make optimal decisions.",
        "• The AI can never lose, resulting only in wins or draws.",
        "• Implemented recursion and backtracking to explore possible game states.",
        "• Demonstrates algorithm design and decision-making logic.",
      ],
      github: "https://github.com/Adham-Hatem/tic-tac-toe",
    },
    {
      title: "Snake AI - Deep Q-Network",
      description: [
        "A Snake game built from scratch with an AI agent trained using Deep Q-Learning.",
        "• Created the original Snake environment using pure Python.",
        "• Implemented a Deep Q-Network (DQN) using PyTorch.",
        "• Explored reinforcement learning concepts such as rewards, states, and training.",
      ],
      github: "https://github.com/Adham-Hatem/snake_Human_AI",
    },
    {
      title: "Advanced Calculator - Java",
      description: [
        "A fully functional calculator application developed using pure Java.",
        "• Implemented mathematical operations and user interaction systems.",
        "• Practiced object-oriented programming and Java fundamentals.",
        "• Improved problem solving through handling different calculations and inputs.",
      ],
      github: "https://github.com/Adham-Hatem/Working-Calculator",
    },
    {
      title: "Cat Window - React Interactive Component",
      description: [
        "An interactive animated window scene built as a reusable React component.",
        "• Implemented component-based architecture and React state management.",
        "• Added dynamic interactions such as changing cats, clouds, and moon states.",
        "• Practiced CSS animations, custom styling, and DOM interactions.",
      ],
      component: WindowCatPreview,
    },
  ];

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") {
        setSelectedProject(-1);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section id="projects" className="section projectsSection">
      <div className="sectionDivider" />

      <h2 className="sectionTitle">Projects</h2>

      <p className="sectionSubtitle">
        A collection of projects showcasing my experience in AI, web
        development, game development, and software engineering.
      </p>
      <div className="projectsGrid">
        {projects.map((proj, i) => (
          <AnimatedBlock
            className="projectCard clickable"
            key={i}
            index={i}
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();

              setPopupPosition({
                top: rect.top,
                left: rect.left,
                width: rect.width,
                height: rect.height,
              });

              setSelectedProject(i);
            }}
          >
            <p className="projectTitle">{proj.title}</p>

            <p className="projectPreview">Click to view details →</p>
          </AnimatedBlock>
        ))}
      </div>

      <div className="sectionDivider" />

      {selectedProject !== -1 && (
        <>
          <div
            className="projectOverlay"
            onClick={() => setSelectedProject(-1)}
          />

          <div
            className="projectPopup opening"
            style={{
              top: popupPosition?.top,
              left: popupPosition?.left,
              width: popupPosition?.width,
              height: popupPosition?.height,
            }}
          >
            <button
              className="popupClose clickable"
              onClick={() => setSelectedProject(-1)}
            >
              ✕
            </button>

            <h1>{projects[selectedProject].title}</h1>

            {projects[selectedProject].image && (
              <img
                className="popupImage"
                src={projects[selectedProject].image}
                alt={projects[selectedProject].title}
              />
            )}

            <div className="popupDescription">
              {projects[selectedProject].description.map((desc, i) => (
                <p key={i}>{desc}</p>
              ))}
            </div>

            {projects[selectedProject].github && (
              <a
                className="githubButton"
                href={projects[selectedProject].github}
                target="_blank"
              >
                View Github
              </a>
            )}

            {projects[selectedProject].component && (
              <div className="livePreview">
                {(() => {
                  const Component = projects[selectedProject].component;
                  return <Component />;
                })()}
              </div>
            )}
          </div>
        </>
      )}
    </section>
  );
}
