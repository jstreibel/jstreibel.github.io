import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

import AppShell from './components/AppShell';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import NotesPage from './pages/NotesPage';
import ProfessionalPage from './pages/ProfessionalPage';
import ProjectsPage from './pages/ProjectsPage';

export default function App() {
  return (
    <HashRouter>
      <AppShell>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/professional" element={<ProfessionalPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </AppShell>
    </HashRouter>
  );
}
