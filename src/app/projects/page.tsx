import ProjectCard from "@/components/ProjectCard/ProjectCard";
import "./projects.css";

import NavBar from "@/components/NavBar/NavBar";

export default function Projects() {
  return (
    <div className="MainWrapper">
      <NavBar />
      <div className="MainContent">
        <div className="ProjectsContainer">
          <ProjectCard
            ProjectDescription="Nothing to see here bro"
            ProjectImage="/"
            ProjectName='The "Art" Gallery'
            ProjectNumber="#1"
            href="/"
          />
          <ProjectCard
            ProjectDescription="Nothing to see here bro"
            ProjectImage="/"
            ProjectName='The "Art" Gallery'
            ProjectNumber="#2"
            href="/"
          />
          <ProjectCard
            ProjectDescription="Nothing to see here bro"
            ProjectImage="/"
            ProjectName='The "Art" Gallery'
            ProjectNumber="#3"
            href="/"
          />
        </div>
      </div>
    </div>
  );
}
