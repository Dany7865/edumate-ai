
import express from 'express';
import { scrapeRGPV } from './scraper.js';

const app  = express();
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/branches', async (req, res) => {
  const data = await scrapeRGPV();
  res.json(data);
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
// Export the app for testing purposes
export default app;