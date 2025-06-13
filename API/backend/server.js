const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 3000;
const JWT_SECRET = "minhasupersenha"

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Simula um banco de dados
const CREDENCIAIS_VALIDAS = {
    email: "teste@gmail.com",
    senha: "123"
}

// Recebe dois parametros => rota (string), função anonima
app.post('/login', (req, res) => {
    const { email, senha } = req.body;
    if( email === CREDENCIAIS_VALIDAS.email && senha === CREDENCIAIS_VALIDAS.senha ){
        const token = jwt.sign(
            {email: email, iat: Date.now()}, 
            JWT_SECRET, 
            {expiresIn: '1h'}
        );

        console.log("Login bem sucedido, token gerado com sucesso");

        res.json({ token });
    } else{
        console.log("Email ou senha incorreta");
        res.status(401).json({ erro: 'Credencial inválida' });
    }
}); //http://localhost:3000/login

app.get('/api/dados', (req, res) => {
    res.json({status: "Sucesso"})
});

app.listen(PORT, () => {
    console.log("Iniciando o servidor SHIVA");
    console.log(`API rodando na porta ${PORT}`)
});