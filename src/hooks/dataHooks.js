import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const useCountriesData = () => {
  const { data, error } = useSWR(
    "https://restcountries.com/v3.1/all?fields=name,cca2",
    fetcher
  );

  return {
    countriesData: data
      ?.map((country) => ({
        value: country.cca2,
        label: country.name.common,
      }))
      .sort((a, b) => a.label.localeCompare(b.label)),
    countriesLoading: !error && !data,
    countriesError: error,
  };
};

export const useProductsData = () => {
  const { data, error } = useSWR("https://dummyjson.com/products", fetcher);

  return {
    productsData: data,
    productsLoading: !error && !data,
    productsError: error,
  };
};
