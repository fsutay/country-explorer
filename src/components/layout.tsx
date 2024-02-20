import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import CountriesList from "./countries-list";
import CountrySearchBar from "./search-bar";

const Layout: React.FC = () => {
  const countries = useSelector((state: RootState) => state.country.countries);
  return (
    <Container className="m-5">
      <CountrySearchBar />
      <CountriesList countries={countries} />
    </Container>
  );
};

export default Layout;
