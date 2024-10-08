// Importar o express
const express = require('express');

// Criar uma instância do express
const app = express();

// Porta onde o servidor irá rodar
const port = process.env.PORT || 3000;

// Rota inicial (GET)
app.get('/', (req, res) => {
  res.send('API REST funcionando!');
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
