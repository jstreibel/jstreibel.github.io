import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

import BlankPage from './pages/BlankPage';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<BlankPage />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </HashRouter>
  );
}
