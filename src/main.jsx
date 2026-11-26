import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Link, Route, Routes, useParams } from 'react-router-dom';
import './styles.css';

const base = import.meta.env.BASE_URL;
const publicData = 'https://raw.githubusercontent.com/Arina88lap/vis-07-pages/gh-pages/static/db/data.json';
const url = import.meta.env.DEV ? '/api/items' : publicData;

function Item({ items }) {
  const { id } = useParams();
  const item = items.find((value) => String(value.id) === id);
  return <article><Link to="/">Все материалы</Link><h2>{item?.title ?? 'Материал не найден'}</h2><p>{item?.description}</p></article>;
}

function App() {
  const [items, setItems] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    async function load() {
      try {
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const value = await response.json();
        const records = Array.isArray(value) ? value : value.items;
        if (!Array.isArray(records)) throw new Error('Invalid data');
        setItems(records);
      } catch (problem) {
        if (problem.name !== 'AbortError') setError(true);
      }
    }
    load();
    return () => controller.abort();
  }, []);

  return <main><h1>Материалы практики</h1>{error ? <p role="alert">Не удалось загрузить материалы.</p> : items === null ? <p>Загрузка…</p> : <Routes>
    <Route path="/" element={<ul>{items.map((item) => <li key={item.id}><Link to={`/items/${item.id}`}>{item.title}</Link><p>{item.description}</p></li>)}</ul>} />
    <Route path="/items/:id" element={<Item items={items} />} />
    <Route path="*" element={<p>Страница не найдена. <Link to="/">Все материалы</Link></p>} />
  </Routes>}</main>;
}

createRoot(document.getElementById('root')).render(<BrowserRouter basename={base}><App /></BrowserRouter>);
