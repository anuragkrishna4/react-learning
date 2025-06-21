// Simulate API fetch with pagination and category
export const fetchProducts = async (page, category) => {
  const perPage = 10;
  const allProducts = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    category: i % 2 === 0 ? "Electronics" : "Clothing",
    price: (Math.random() * 100 + 50).toFixed(2)
  }));

  const filtered = category === "All"
    ? allProducts
    : allProducts.filter(p => p.category === category);

  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  return new Promise(resolve =>
    setTimeout(() => resolve(paginated), 1000)
  );
};
