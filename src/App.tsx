import React, { useEffect } from "react";
import Layout from "./components/layout";
import { useQuery } from "@apollo/client";
import { useDispatch } from "react-redux";
import { addCountry, setLoading } from "./store/country-slice";
import { getCountries } from "./service/service";

function App() {
  const dispatch = useDispatch();
  const { loading, error, data } = useQuery(getCountries);

  useEffect(() => {
    dispatch(setLoading(loading));
    if (data) {
      dispatch(addCountry(data.countries));
    }
  }, [data, dispatch, loading]);

  return (
    <div>
      <Layout />
    </div>
  );
}

export default App;
