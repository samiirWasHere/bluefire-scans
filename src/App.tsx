import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './contexts/AuthContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { SeriesDetailPage } from './pages/SeriesDetailPage';
import { ReaderPage } from './pages/ReaderPage';
import './index.css';

function App() {
  return (
    <AuthProvider>
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
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#1a1a25',
              color: '#ffffff',
              border: '1px solid #2a2a35',
              borderRadius: '8px',
              padding: '12px 16px',
            },
            success: {
              iconTheme: {
                primary: '#22c55e',
                secondary: '#ffffff',
              },
            },
            error: {
              iconTheme: {
                primary: '#ef4444',
                secondary: '#ffffff',
              },
            },
          }}
        />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
