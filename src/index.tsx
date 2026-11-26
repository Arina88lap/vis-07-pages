import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';

const root = document.getElementById('root');
const basename = process.env.NODE_ENV === 'development' ? '/' : process.env.PUBLIC_URL || '/';
if (root) {
  createRoot(root).render(
    <BrowserRouter basename={basename}>
      <Routes><Route path="*" element={<App />} /></Routes>
    </BrowserRouter>,
  );
}
