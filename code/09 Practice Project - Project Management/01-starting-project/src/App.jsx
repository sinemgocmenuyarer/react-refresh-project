import { NewProject } from "./components/NewProject";
import { NoProjectSelected } from "./components/NoProjectSelected";
import { ProjectsSidebar } from "./components/ProjectsSidebar";
import { SelectedProject } from "./components/SelectedProject";
import { useState } from "react";

function App() {
  const [projectsState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  const handleAddProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };

  function handleSaveProject(projectData) {
    setProjectState((prevState) => {
      const newProject = { ...projectData, id: Math.random() };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  const handleCancelProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  };

  const handleSelectProject = (id) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  };

  let project = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  const handleDeleteProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projectsState.projects.filter(
          (project) => project.id !== projectsState.selectedProjectId
        ),
      };
    });

    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
        projects: [...prevState.projects],
      };
    });
  };

  let content = (
    <SelectedProject project={project} onDeleteProject={handleDeleteProject} />
  );

  if (projectsState?.selectedProjectId === null) {
    content = (
      <NewProject
        onSaveProject={handleSaveProject}
        onCancelProject={handleCancelProject}
      />
    );
  } else if (projectsState?.selectedProjectId === undefined) {
    content = <NoProjectSelected onAddProject={handleAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onAddProject={handleAddProject}
        onSelectProject={handleSelectProject}
        projects={projectsState.projects}
      />
      {content}
    </main>
  );
}

export default App;
