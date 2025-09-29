// Footer.jsx
export default function Footer() {
  return (
    <footer style={footerStyle}>
      Desenvolvido pela Gerência de Tecnologia da Informação - SEJUSC
    </footer>
  );
}

const footerStyle = {
  textAlign: "center",
  padding: "0px 0",
  color: "#fff", // cor do texto, igual aos seus botões
  fontSize: "24px",
  position: "fixed",
  bottom: 0,
  width: "100%",
  
};
