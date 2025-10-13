export default function Equipe() {
  const membros = [
    {
      nome: "Gabriel Nery",
      funcao: "Gerente de Tecnologia da Informação",
      foto: "/images/gabriel.png",
    },
    {
      nome: "Nathalia Alencar",
      funcao: "Desenvolvedora Back-End / Coordenadora",
      foto: "/images/nathalia.png",
    },
    {
      nome: "Amir",
      funcao: "",
      foto: "/images/.png",
    },

    {
      nome: "Yasmin Rocha",
      funcao: "Desenvolvedora Front-End e Design",
      foto: "/images/yasmin.png",
    },
  ];

  return (
    <div className="section">
      <h2>Equipe de Desenvolvimento</h2>
      <p>
        Esta página apresenta os integrantes responsáveis pelo desenvolvimento e
        coordenação das políticas digitais e do sistema SEJUSC.
      </p>

      <div className="team-container">
        {membros.map((membro, index) => (
          <div className="team-card" key={index}>
            <img src={membro.foto} alt={membro.nome} className="team-photo" />
            <h3>{membro.nome}</h3>
            <p>{membro.funcao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
