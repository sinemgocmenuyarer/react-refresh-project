import { ProjectsSidebar } from "./components/ProjectsSidebar";
import { ComponentCheck } from "./components/ComponentCheck.jsx";
import { ProjectContextProvider } from "./store/context.jsx";

function App() {
  return (
    <ProjectContextProvider>
      <main className="h-screen my-8 flex gap-8">
        <ProjectsSidebar />
        <ComponentCheck />
      </main>
    </ProjectContextProvider>
  );
}

export default App;
