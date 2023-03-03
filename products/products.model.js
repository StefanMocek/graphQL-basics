const products = [
  {
    id: 'redshoe',
    description: 'Red Shoe',
    price: 42.12,
    reviews: [],
  },
  {
    id: 'bluejean',
    description: 'Blue Jeans',
    price: 55.55,
    reviews: [],
  }
];

function getAllProducts() {
  return products;
};

module.exports = {
  getAllProducts
};