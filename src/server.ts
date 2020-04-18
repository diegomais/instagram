import express from 'express';

const app = express();

const port = 3333;

app.get('/', (request, response) => {
  return response.json({ message: 'Hello  World' });
});

app.listen(port, () => {
  console.log(`🚀 Server started on port ${port}!`);
});
