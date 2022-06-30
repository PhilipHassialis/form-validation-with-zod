export const getProductCategories = (products) => {
  const categories = products.reduce((acc, product) => {
    if (!acc.includes(product.category)) {
      acc.push(product.category);
    }
    return acc;
  }, []);

  return categories.sort();
};

export const getProductsPerCategory = (products, category) => {
  return products.filter((product) => product.category === category);
};
