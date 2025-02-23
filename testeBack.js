// Importando as bibliotecas necessárias
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

// Criando uma instância do Express
const app = express();
const port = 3000; // Porta que o servidor irá escutar

// Configurando o body-parser para lidar com JSON e URL-encoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configurando a conexão com o banco de dados MySQL
const connection = mysql.createConnection({
  host: '3306', // Endereço do seu servidor MySQL
  user: 'root', // Substitua pelo seu usuário MySQL
  password: '1416225235Gn@', // Substitua pela sua senha MySQL
  database: 'merendaFacil' // Substitua pelo nome do seu banco de dados
});

// Conectando ao banco de dados
connection.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err); // Exibe o erro se a conexão falhar
    return;
  }
  console.log('Conexão bem-sucedida ao banco de dados'); // Exibe sucesso na conexão
});

// Rota para login
app.post('/login', (req, res) => {
  const { email, senha } = req.body;

  const sql = 'SELECT * FROM T_login WHERE email = ? AND senha = ?';
  connection.query(sql, [email, senha], (err, results) => {
    if (err) {
      console.error('Erro ao executar consulta:', err);
      return res.status(500).json({ success: false, message: 'Erro ao consultar o banco de dados' });
    }

    if (results.length > 0) {
      res.json({ success: true, message: 'Login bem-sucedido' });
    } else {
      res.json({ success: false, message: 'Email ou senha incorretos' });
    }
  });
});

// Iniciando o servidor Express
app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});
