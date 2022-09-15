import express from "express";

const app = express();

app.get('/games', (req, res) => {
  return res.status(200).json([])
});

app.post('/ads', (req, res) => {
  return res.status(201).json([])
});

const mock = [
  { id: 1, name: "Anuncio 1" },
  { id: 2, name: "Anuncio 2" },
  { id: 3, name: "Anuncio 3" },
  { id: 3, name: "Anuncio 4" },
]
app.get('/games/:id/ads', (req, res) => {
  return res.status(200).json(mock);
});

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
