import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { SeriesDetailPage } from './pages/SeriesDetailPage';
import { ReaderPage } from './pages/ReaderPage';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/series/:id" element={<SeriesDetailPage />} />
          <Route path="/read/:seriesId/:chapterId" element={<ReaderPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
