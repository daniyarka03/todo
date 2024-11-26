import './App.css'
import ProjectCard from "./components/ProjectCard/ProjectCard.tsx";
import Button from "./components/Button/Button.tsx";

function App() {

  return (
    <>
        <section className="home-page">
            <h1 className="home-page__title">Your Projects</h1>
            <Button>New project</Button>
        </section>
    <div className="projects">
        <ProjectCard
            name="Holidays in Norway"
            numberTasks={10}
            completedTasks={8}
            cover="https://i.pinimg.com/736x/27/3b/85/273b858d82394e76437759e11e30af4e.jpg"
        />
        <br/>
        <ProjectCard
            name="Daily Tasks"
            numberTasks={4}
            completedTasks={2}
            cover="https://i.pinimg.com/736x/3f/ed/34/3fed34f05635e400a3707e54dcb2401d.jpg"
        />
    </div>
    </>
  )
}

export default App
