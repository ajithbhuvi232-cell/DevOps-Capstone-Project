const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

// Sample car data (in-memory)
let cars = [
  { id: 1, name: "BMW X5", price: "₹95L" },
  { id: 2, name: "Audi A6", price: "₹70L" },
  { id: 3, name: "Tesla Model 3", price: "₹60L" }
];

// Get all cars
app.get('/api/cars', (req, res) => {
  res.json(cars);
});

// Add new car
app.post('/api/cars', (req, res) => {
  const newCar = {
    id: cars.length + 1,
    name: req.body.name,
    price: req.body.price
  };
  cars.push(newCar);
  res.json(newCar);
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: "UP", time: new Date() });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});