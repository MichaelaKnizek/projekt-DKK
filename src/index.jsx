import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage';
import FilterPage from './components/FilterPage/FilterPage';
import TripsPage from './components/TripsPage/TripsPage';
import ResultsPage from './components/ResultsPage/ResultsPage';
import DetailPage from './components/DetailPage/DetailPage';
import './global.css';

createRoot(document.querySelector('#app')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/filter" element={<FilterPage />} />
      <Route path="/trips" element={<TripsPage />} />
      <Route path="/result" element={<ResultsPage />} />
      <Route path="/detail" element={<DetailPage />} />
    </Routes>
  </BrowserRouter>,
);
