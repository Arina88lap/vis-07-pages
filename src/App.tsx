import { useEffect, useState } from 'react';
import { getData, ResponseData } from './api';

export default function App() {
  const [data, setData] = useState<ResponseData>();
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    getData(controller.signal).then(setData).catch(() => {
      if (!controller.signal.aborted) setFailed(true);
    });
    return () => controller.abort();
  }, []);

  return <p style={{ textAlign: 'center' }}>
    {failed ? 'Failed to load data' : data?.greeting ?? 'Loading…'}
  </p>;
}
