const express = require('express');
const app = express();

// Serve frontend
app.use(express.static('public'));

// Health API
app.get('/health', (req, res) => {
  res.json({
    status: 'UP',
    time: new Date()
  });
});

// Start server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});