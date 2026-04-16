function Projetos() {
  const projetos = [
    {
      nome: "Portfólio HTML",
      descricao: "Site feito com HTML, CSS e JavaScript"
    },
    {
      nome: "Sistema Financeiro",
      descricao: "Controle de gastos e receitas"
    },
    {
      nome: "Projeto React",
      descricao: "Meu portfólio moderno em React"
    }
  ];

  return (
    <section id="projetos">
      <h2>Meus Projetos</h2>

      {projetos.map((projeto, index) => (
        <div key={index}>
          <h3>{projeto.nome}</h3>
          <p>{projeto.descricao}</p>
        </div>
      ))}
    </section>
  );
}

export default Projetos;