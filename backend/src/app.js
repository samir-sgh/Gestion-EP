const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares globaux
app.use(express.json());

// Route de test de santé de l'API
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Le serveur Express fonctionne parfaitement !' });
});

app.listen(PORT, () => {
  console.log(`[Serveur] Lancé sur le port http://localhost:${PORT}`);
});