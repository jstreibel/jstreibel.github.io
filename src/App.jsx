import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

import HelloPage from './pages/personal/HelloPage';
import NotesPage from './pages/personal/NotesPage';
import DevLogPage from './pages/personal/DevLogPage';

import AboutPage from './pages/professional/AboutPage';
import WorkPage from './pages/professional/WorkPage';

import SiteLayout from './components/SiteLayout';
import LinksPage from './pages/personal/LinksPage';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<SiteLayout variant="personal" />}>
          <Route path="/personal/hello" element={<HelloPage />} />
          <Route path="/personal/notes" element={<NotesPage />} />
          <Route path="/personal/devlog" element={<DevLogPage />} />
          <Route path="/personal/links" element={<LinksPage />} />
        </Route>
        <Route element={<SiteLayout variant="professional" />}>
          <Route path="/professional/about" element={<AboutPage />} />
          <Route path="/professional/work" element={<WorkPage />} />
        </Route>
        <Route path="/" element={<Navigate replace to="/personal/hello" />} />
        <Route path="*" element={<Navigate replace to="/personal/hello" />} />
      </Routes>
    </HashRouter>
  );
}
