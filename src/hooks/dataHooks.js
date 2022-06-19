import { useState, useEffect } from "react";

export const getCountriesData = () => {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      const resp = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,cca2"
      );
      const data = await resp.json();
      setCountriesData(
        data
          .map((country) => ({
            value: country.cca2,
            label: country.name.common,
          }))
          .sort((a, b) => a.label.localeCompare(b.label))
      );
    };

    getCountries();
  }, []);

  return countriesData;
};
