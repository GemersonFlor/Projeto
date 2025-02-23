mysql-init( &conexao);
if (mysql_query(&conexao,"insert into merendaFacil " root","@Merendafacil", 

const sequelize = require ('sequelize')
const sequelize = new Sequelize ('merendaFacil', 'root', '@Merendafacil' {
host:,
dialect: "Mysql"})


// informar se foi conectado com sucesso ao banco de dados caso tenha dado certo 'then' se aparecer erro "catch"

sequelize.autenticate().then(function(){
console.log("conectado com sucesso!" ) }).catch(function(erro){"falha ao se conectar: "+erro)})

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const xlsx = require('xlsx');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Configuração do banco de dados
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '@Merendafacil',
    database: 'merendaFacil'
});

db.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
    } else {
        console.log('Conectado ao banco de dados.');
    }
});

// Rota para escanear código de barras e armazenar dados
app.post('/scan', (req, res) => {
    const { RA, serie, nome_aluno, restricaoAlimentar } = req.body;
    const dataRetirada = new Date();

//operação de inserção de dados no banco de dados MySQL usando Node.js. 
    const query = `INSERT INTO T_telaInicial (RA, serie, nome_aluno, restricaoAlimentar, dataRetirada) VALUES ("1224446458	";1D;ANA LUIZA DA SILVA ROSA;;1;
    120934158X;1D;ANALLU DA SILVA FERRO;;1;
    1224319370;1D;ANNE SOPHIA FIDELES MATIAS;;1;
    "1248792403	";1D;BENJAMIN MOURA CARVALHO;DIETA ISENTA DE PROTEÍNA DO LEITE, LEITE E DERIVADOS;1;
    "1242025212	";1D;BERNARDO SANTOS SOUZA;;1;
    1224391214;1D;BIANCA DOS SANTOS ANDRADE;;1;
    "1217585412	";1D;DANIEL LINS ROSENO;;1;
    "1217724072	";1D;DAVI NICOLAS DA SILVA BORMANN;;1;
    "1225306061	";1D;ENZO LIMA VIEIRA MATTOS;;1;
    1217714613;1D;ESTHER MORAIS CAETANO DA SILVA;;1;
    "1217710279	";1D;ESTHER VALENTINA CANDIDA DA SILVA;;1;
    1226386830;1D;HELENA MORBECK SOARES ALVES;;1;
    1247319180;1D;HENRIQUE PROKISCH LERBACH;;1;
    1223501942;1D;HENRY GAEL SIMPLICIO LACERDA;;1;
    1224517544;1D;ISABELLA SOUSA PASSINI;;1;
    1213376294;1D;JOAO KALEB RODRIGUES NOGUEIRA;;1;
    1210805509;1D;JOAO LUCAS DE SOUZA MACHADO;;1;
    "1221007610	";1D;JOAO LUCAS LEITE SOUSA;;1;
    1214667867;1D;KALEB ANDRÉ CORDEIRO DE QUEIROZ;;1;
    1238284115;1D;KAUAN OLIVEIRA DA SILVA;;1;
    1224316642;1D;LAVINIA NUNES SOARES;;1;
    1218910677;1D;LEVI GOIS DOS SANTOS;;1;
    1218680921;1D;LUNNA DA SILVA OLIVEIRA BATISTA;;1;
    1228931112;1D;MIGUEL ALVES LIMA DE SOUSA;;1;
    1217717870;1D;MIGUEL SOUZA DA SILVA;;1;
    1217706598;1D;MILENA BERTI DE SOUSA;;1;
    1208909113;1D;NICOLLI DA SILVA SOUSA;;1;
    1233460869;1D;PEDRO LORENZO REIS;;1;
    1233271945;1D;SAMUEL COSTA SANTOS;;1;
    1217719088;1D;SOPHIA MANUELLY JESUS DA SILVA;;1;
    1208947618;1D;SOPHIA MARIAH NOGUEIRA ARAGÃO PINHEIRO BARBOSA;;1;
    1243146679;1D;SOPHIA SILVA FARIA ROSA;;1;
    1225403807;1D;VALENTINA SILVA CESARIO;;1;
    1228969978;1D;VICTOR GABRIEL DOS SANTOS SOUSA;;1;
    1224519176;1D;VINÍCIUS DE SOUSA RODRIGUES;;1;
    1208912215;1D;YAGO FELICIO BENJAMIM;;1;
    1211270920;1D;YURI PEREIRA SILVA;;1;)`;
    
    db.query(query, [RA, serie, nome_aluno, restricaoAlimentar, dataRetirada], (err, result) => {
        if (err) {
            console.error('Erro ao inserir dados:', err);
            res.status(500).send('Erro ao inserir dados.');
        } else {
            res.status(200).send('Dados inseridos com sucesso.');
        }
    });
});

// Rota para gerar relatório em Excel
app.post('/generate-report', (req, res) => {
    const { startDate, endDate } = req.body;

    const query = `SELECT * FROM T_telaInicial WHERE dataRetirada BETWEEN ? AND ?`;
    db.query(query, [startDate, endDate], (err, results) => {
        if (err) {
            console.error('Erro ao buscar dados:', err);
            res.status(500).send('Erro ao buscar dados.');
        } else {
            const worksheet = xlsx.utils.json_to_sheet(results);
            const workbook = xlsx.utils.book_new();
            xlsx.utils.book_append_sheet(workbook, worksheet, 'Relatório');
            const filePath = 'relatorio.xlsx';
            xlsx.writeFile(workbook, filePath);
            res.download(filePath, 'relatorio.xlsx', err => {
                if (err) {
                    console.error('Erro ao enviar arquivo:', err);
                }
                fs.unlinkSync(filePath);
            });
        }
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
