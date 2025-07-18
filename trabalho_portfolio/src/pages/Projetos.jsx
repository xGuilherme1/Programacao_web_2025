import './Projetos.css';

function Projetos() {
  return (
    <section className="projetos-container">
      <div className="projetos-content">
        <h2>Meus Projetos</h2>
        <div className="projetos-grid">

          <div className="projeto-card">
            <h3>Projeto 1: Calculadora React</h3>
            <p>Aplicativo de calculadora básica feito com React e CSS.</p>
            <a href="https://github.com/seu-usuario/calculadora-react" target="_blank" rel="noopener noreferrer">
              Ver no GitHub
            </a>
          </div>

          <div className="projeto-card">
            <h3>Projeto 2: Lista de Tarefas</h3>
            <p>To-do list com funcionalidades de adicionar, remover e marcar tarefas como concluídas.</p>
            <a href="https://github.com/seu-usuario/todo-app" target="_blank" rel="noopener noreferrer">
              Ver no GitHub
            </a>
          </div>

          <div className="projeto-card">
            <h3>Projeto 3: Formulário com Validação</h3>
            <p>Formulário interativo com validação de campos em tempo real, feito com HTML, CSS e JS.</p>
            <a href="https://github.com/seu-usuario/formulario-validacao" target="_blank" rel="noopener noreferrer">
              Ver no GitHub
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projetos;