import './Contato.css';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';

function Contato() {
  return (
    <section className="contato-container">
      <div className="contato-content">
        <h2>Contato</h2>
        <p><FaEnvelope /> Email: guilherme2008assuncao@gmail.com</p>
        <p><FaPhone /> Telefone: (69) 99278-3833</p>

        <div className="redes-sociais">
          <a href="https://github.com/xGuilherme1" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
          <a href="https://linkedin.com/in/seu-usuario" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contato;