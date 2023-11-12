const express = require ('express');
const bodyParser = require('body-parser');
const { pool, createTables } = require ('./db');
const inventoryRoutes = require('.routes/inventory');

const app = express();

app.use(bodyParser.json());
app.use('/api/inventory', inventoryRoutes);

createTables().then(() => {
    console.log('Tabelas criadas!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.lob (`Servidor rodando na porta ${PORT}`);
});