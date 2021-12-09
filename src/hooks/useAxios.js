import { useEffect, useState } from 'react';
import api from '../services/api';

const useAxios = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function loadData() {
      const response = await api.get(url);
      setData(response.data);
    }
    loadData();
  }, [url]);  
  return data;
}

export default useAxios;