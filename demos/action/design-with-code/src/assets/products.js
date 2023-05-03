const products = [
  {
    name: 'Cooler Laptop',
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?w=500',
    currentPrice: 1299,
  },
  {
    name: 'Smarte Steckdose',
    image: 'https://images.pexels.com/photos/845239/pexels-photo-845239.jpeg?w=500',
    currentPrice: 19.99,
  },
  {
    name: 'E-Scooter',
    image: 'https://images.pexels.com/photos/1550136/pexels-photo-1550136.jpeg?w=500',
    currentPrice: 479,
  },
]

const productsWithId = products.map((item, id) => ({ ...item, id }))
export default productsWithId
