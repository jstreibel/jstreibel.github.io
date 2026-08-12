import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

import AboutPage from './pages/AboutPage';
import NotesPage from './pages/NotesPage';
import SiteLayout from './components/SiteLayout';
import WorkPage from './pages/WorkPage';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/work" element={<WorkPage/> } />
          <Route path="/notes" element={<NotesPage />} />
        </Route>
        <Route path="/" element={<Navigate replace to="/about" />} />
        <Route path="*" element={<Navigate replace to="/about" />} />
      </Routes>
    </HashRouter>
  );
}
