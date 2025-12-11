import "../App.css";
function Header() {
  return (
    <div className="header">
      <a href="#" className="logo">
        Dev Burguer🍔
      </a>
      <nav>
        <a href="#">Início</a>
        <a href="#cardapio">Cardápio</a>
        <a href="#sobre">Sobre</a>
        <a href="#cta">Contato</a>
      </nav>
      <a href="#cardapio" className="btn">Peça agora</a>
    </div>
  );
}
export default Header;
