import Axios from "axios";
import { useEffect, useState } from "react";


export const useAxios = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get(url,{
      headers: {
        'Access-Control-Allow-Origin': true,
      },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  return { data };
};
