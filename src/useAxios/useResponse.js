import React, { useEffect, useState } from "react";
import axios from "axios";
const useResponse = (params) => {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  async function fetchData(params) {
    try {
      setLoading(true);
      let data1 = await axios.get(`${process.env.React_APP_API_URL}/${params}`);
      setResponse(data1.data);
    } catch (error) {
      setError("error :" + error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(params);
 
  }, [params]);
  return { response, error, loading };
};

export default useResponse;
