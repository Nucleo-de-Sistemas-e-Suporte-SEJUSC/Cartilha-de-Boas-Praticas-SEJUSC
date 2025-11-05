import '../styles/Equipe.css';
import Milena from '../assets/Milena.jpeg';
import Nathy from '../assets/Nathy.jpeg';
import Gabriel from '../assets/Gabriel.jpeg';
import Marcos from '../assets/Marcos.jpeg'
import Amir from '../assets/Amir.jpeg';
import Yasmao from '../assets/Yasmao.png';
import Marti from '../assets/Marti.jpeg';
import Mini from '../assets/Mini.jpeg';

export default function Equipe() {
  const membros = [
    {
      nome: "Gabriel Nery",
      funcao: "Gerente de Tecnologia da Informação",
      foto: Gabriel,
    },
    {
      nome: "Nathalia Alencar",
      funcao: "Desenvolvedora Back-End / Coordenadora",
      foto: Nathy,
    },
    {
      nome: "Yasmin Rocha",
      funcao: "Desenvolvedor Front-End e Design",
      foto: Mini,
    },
    {
      nome: "Amir Maia",
      funcao: "Técnico de Redes",
      foto: Amir,
    },
    {
      nome: "Yasmin Jacauna",
      funcao: "Técnico de Redes",
      foto: Yasmao,
    },
    {
      nome: "Maria Batista",
      funcao: "Técnico de Manutenção",
      foto: Marti,
    },
    {
      nome: "Alcir Filho",
      funcao: "Técnico de Redes",
      foto: "/images/.png",
    },
    {
      nome: "Milena Costa",
     funcao: "Técnico de Manutenção",
      foto: Milena,
    },
    {
      nome: "Marcos Santos",
      funcao: "Técnico de Manutenção",
      foto: Marcos,
    },
    {
      nome: "Blenda Nascimento",
      funcao: "Administrativo",
      foto: "/images/.png",
    },
  ];

  return (
    <div className="section">
      <h2>Equipe de Desenvolvimento</h2>
      <p>
        
      </p>

      <div className="team-container">
        {membros.map((membro, index) => (
          <div className="team-card" key={index}>
            <img src={membro.foto} alt={membro.nome} className="team-photo" />
            <h3>{membro.nome}</h3>
            <p className="membro-funcao">{membro.funcao}</p>

          </div>
        ))}
      </div>
    </div>
  );
}
