import { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {
  const isMounted = useRef(true);
  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });
  useEffect(() => {
    setState({ data: null, loading: true, error: null });

    if (isMounted.current) {
      fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
          setState({
            loading: false,
            error: null,
            data: data,
          });
        });
    }
  }, [url]);

  return state;
};
