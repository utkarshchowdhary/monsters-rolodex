import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async (url) => {
      try {
        const res = await fetch(url);
        const deets = await res.json();
        setData(deets);
      } catch (err) {
        setError(err);
      }
    })(url);
  }, [url]);

  return [data, error];
};

export default useFetch;
