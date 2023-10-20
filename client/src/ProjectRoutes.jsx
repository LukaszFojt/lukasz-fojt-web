import { Routes, Route } from 'react-router-dom';
import ProjectsPage from './pages/ProjectsPage';
import ProjectLayout from './ProjectLayout';
import {
  CosmosWebsite,
  Project2,
  Project3
} from './pages/projects'

const ProjectRoutes = () => {
  return (
    <Routes>
      <Route
        element={<ProjectLayout/>}>
        <Route 
          index
          element={<ProjectsPage/>}
        />
        <Route
          path='cosmos'
          element={<CosmosWebsite/>}
        />
        <Route
          path='2'
          element={<Project2/>}
        />
        <Route
          path='3'
          element={<Project3/>}
        />
      </Route>
    </Routes>
  )
}

export default ProjectRoutes;