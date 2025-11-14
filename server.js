import http from 'http';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import alunoRoutes from './routes/routerAlunos.js'


dotenv.config();
const app = express();
const port = process.env.PORTA;
app.use(express.json());
app.use(cors());
app.use(express.static('views'));
app.use('/aluno', alunoRoutes);
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: './views' });
});
const server = http.createServer(app);
server.listen(port, () => {
    console.log(`servidor rodando em http://localhost:${port}`);
});