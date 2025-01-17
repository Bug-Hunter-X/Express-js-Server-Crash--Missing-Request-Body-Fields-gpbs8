const express = require('express');
const app = express();
app.use(express.json());
app.post('/user', (req, res) => {
  const { name, email } = req.body;
  // Error handling for missing fields
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }
  console.log(name); 
  console.log(email); 
  res.status(201).json({ message: 'User created' });
});
app.listen(3000, () => console.log('Server listening on port 3000'));