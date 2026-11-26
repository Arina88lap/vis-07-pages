export type ResponseData = { greeting: string };

const url = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3001/api/data'
  : 'https://raw.githubusercontent.com/Arina88lap/vis-07-pages/gh-pages/static/db/data.json';

export async function getData(signal: AbortSignal): Promise<ResponseData> {
  const response = await fetch(url, { signal, headers: { Accept: 'application/json' } });
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
  return response.json();
}
